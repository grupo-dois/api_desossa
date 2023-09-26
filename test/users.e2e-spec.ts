import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { faker } from '@faker-js/faker';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ transform: true, whitelist: true }),
    );
    await app.init();
  });

  it('Cenário 1: Realizar um login com sucesso', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);
  });

  it('Cenário 2: Realizar um login com a senha inválida', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'admin' })
      .expect(401)
      .then((response) => {
        expect(response.body.message).toBe('Usuário ou Senha Inválidos');
        expect(response.body.error).toBe('Unauthorized');
      });
  });

  it('Cenário 3: Realizar um login com a usuário inválido', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'umusuarioinvalido', senha: 'maximiliano' })
      .expect(401)
      .then((response) => {
        expect(response.body.message).toBe('Usuário ou Senha Inválidos');
        expect(response.body.error).toBe('Unauthorized');
      });
  });

  it('Cenário 4: Realizar um login com um corpo de envio diferente', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ nome: 'maximiliano' })
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.body.message).toStrictEqual([
          'Usuário não pode estar vazio',
          'Senha não pode estar vazia',
        ]);
      });
  });

  it('Cenário 5: Adicionar um novo usuário com sucesso', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    const fakerEmail = faker.internet.email()
    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: fakerEmail,
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(201)
      .then((response) => {
        expect(response.body.user.email).toBe(fakerEmail);
      });
  });

  it('Cenário 6: Adicionar um novo usuário igual de um usuário existente na base', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    const fakerEmail = faker.internet.email()
    const fakerUsername = faker.internet.userName()

    request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: fakerEmail,
        usuario: fakerUsername,
        senha: faker.internet.password(),
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(201)
      .then((response) => {
        expect(response.body.user.email).toBe(fakerEmail);
      });

    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: fakerEmail,
        usuario: fakerUsername,
        senha: faker.internet.password(),
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe('Nome já existente na base');
      });
  });

  it('Cenário 7: Adicionar um novo usuário com nome em branco', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: '',
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.body.message[0]).toBe('Nome não pode estar vazio');
      });
  });

  it('Cenário 8: Adicionar um novo usuário com email em branco', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: '',
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.body.message[0]).toBe('Email não pode estar vazio');
      });
  });

  it('Cenário 9: Adicionar um novo usuário com a senha em branco', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: '',
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(400)
      .then((response) => {
        expect(response.body.message[0]).toBe('Senha não pode estar vazio');
      });
  });

  it('Cenário 10: Realizar a busca de dados de um usuário', async () => {
    const auth = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ usuario: 'maximiliano', senha: 'maximiliano' })
      .expect(201);

    return request(app.getHttpServer())
      .get('/users/adicionar')
      .send({
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: '',
      })
      .set('Authorization', `Bearer ${auth.body.access_token}`)
      .set('Accept', 'application/json')
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe('Cannot GET /users/adicionar');
      });
  });

  it('Cenario 11: Adicionar um usuário sem permissão', async () => {
    return request(app.getHttpServer())
      .post('/users/adicionar')
      .send({
        nome: faker.person.fullName,
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      })
      .set('Accept', 'application/json')
      .expect(401)
      .then((response) => {
        expect(response.body.message).toBe('Unauthorized');
      });
  });
});
