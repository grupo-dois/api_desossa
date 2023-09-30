import { UsersService } from './users.service';
import { PrismaService } from '../database/prisma.service';
import { faker } from '@faker-js/faker';
import { HttpException } from '@nestjs/common';


describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService(new PrismaService());
  });

  describe('findOneByUsername', () => {
    it('Cenário 1: Deve retornar um usuário válido.', async () => {
      const expectedResult = {
        id: 1,
        nome: 'Maximiliano',
        email: 'maximilianodacruz@gmail.com',
        usuario: 'maximiliano',
        senha: 'maximiliano',
      };
      await usersService.findOneByUsername('maximiliano').then((result) => {
        expect(result.usuario).toBe(expectedResult.usuario);
      });
    });

    it('Cenário 2: Busca por usuário inexistente.', async () => {
      await usersService
        .findOneByUsername('evaristousuarioinvalido')
        .then((result) => {
          expect(result).toBeNull();
        });
    });
  });

  describe('addUsers', () => {
    it('Cenário 3: Deve adicionar um novo usuário com sucesso', async () => {
      const bodyToAddUser = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      }
      await usersService.addUsers(bodyToAddUser).then((result: any) => {
        expect(result.user.nome).toBe(bodyToAddUser.nome);
        expect(result.user.email).toBe(bodyToAddUser.email);
        expect(result.user.usuario).toBe(bodyToAddUser.usuario);
        expect(result.user.senha).toBe(bodyToAddUser.senha);
      });
    });

    it('Cenário 4: Não deve adicionar um novo usuário com duplicidade', async () => {
      const bodyToAddUser = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        usuario: faker.internet.userName(),
        senha: faker.internet.password(),
      }

      await usersService.addUsers(bodyToAddUser).then((result: any) => {
        expect(result.user.nome).toBe(bodyToAddUser.nome);
        expect(result.user.email).toBe(bodyToAddUser.email);
        expect(result.user.usuario).toBe(bodyToAddUser.usuario);
        expect(result.user.senha).toBe(bodyToAddUser.senha);
      });

      const addUsers = async () => {
        return await usersService.addUsers(bodyToAddUser)
      };

      expect(addUsers).rejects.toBeInstanceOf(HttpException);
    });
  });
});