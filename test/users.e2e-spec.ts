import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
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
      .expect(401)
      .then((response) => {
        expect(response.body.message).toBe('Usuário ou Senha Inválidos');
        expect(response.body.error).toBe('Unauthorized');
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
        console.log(response.body)
        expect(response.body.message).toBe('Unauthorized');
      });
  });
});
