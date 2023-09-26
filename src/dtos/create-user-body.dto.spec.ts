import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './create-user-body.dto';
import { faker } from '@faker-js/faker';
import { validate } from 'class-validator';

describe('CreateUserDto', () => {
  it('Cenário 5: Deve ser criado o DTO com sucesso', async () => {
    const bodyToAddUser = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      usuario: faker.internet.userName(),
      senha: faker.internet.password(),
    };

    const myCreateUserDto = plainToInstance(CreateUserDto, bodyToAddUser)
    const errors = await validate(myCreateUserDto)
    expect(errors.length).toBe(0)
  });

  it('Cenário 6: Não deve ser criado o DTO com sucesso - Nome vazio', async () => {
    const bodyToAddUser = {
      nome: '',
      email: faker.internet.email(),
      usuario: faker.internet.userName(),
      senha: faker.internet.password(),
    };

    const myCreateUserDto = plainToInstance(CreateUserDto, bodyToAddUser)
    const errors = await validate(myCreateUserDto)
    expect(errors[0].constraints).toStrictEqual({
      isNotEmpty: 'Nome não pode estar vazio',
    });
  });

  it('Cenário 7: Não deve ser criado o DTO com sucesso - Email vazio', async () => {
    const bodyToAddUser = {
      nome: faker.person.fullName(),
      email: '',
      usuario: faker.internet.userName(),
      senha: faker.internet.password(),
    };

    const myCreateUserDto = plainToInstance(CreateUserDto, bodyToAddUser)
    const errors = await validate(myCreateUserDto)
    expect(errors[0].constraints).toStrictEqual({
      isNotEmpty: 'Email não pode estar vazio',
    });
  });

  it('Cenário 8: Não deve ser criado o DTO com sucesso - usuario vazio', async () => {
    const bodyToAddUser = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      usuario: '',
      senha: faker.internet.password(),
    };

    const myCreateUserDto = plainToInstance(CreateUserDto, bodyToAddUser)
    const errors = await validate(myCreateUserDto)
    expect(errors[0].constraints).toStrictEqual({
      isNotEmpty: 'Usuário não pode estar vazio',
    });
  });

  it('Cenário 9: Não deve ser criado o DTO com sucesso - senha vazio', async () => {
    const bodyToAddUser = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      usuario: faker.internet.userName(),
      senha: '',
    };

    const myCreateUserDto = plainToInstance(CreateUserDto, bodyToAddUser)
    const errors = await validate(myCreateUserDto)
    expect(errors[0].constraints).toStrictEqual({
      isNotEmpty: 'Senha não pode estar vazio',
    });
  });
});
