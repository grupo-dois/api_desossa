UsersService - findOneByUsername
Cenário 1: Deve retornar um usuário válido.
Dado que quero buscar um usuário na base
Quando enviar os dados válidos
Então terei encontrado um usuário 

Cenário 2: Busca por usuário inexistente.
Dado que quero buscar um usuário inexistente
Quando enviar os dados inexistente
Então NÃO terei encontrado um usuário

UsersService - addUsers
Cenário 3: Deve adicionar um novo usuário com sucesso
Dado que desejo criar um novo usuário
Quando enviar os dados válidos
Então terei criado um novo usuário

Cenário 4: Não deve adicionar um novo usuário com duplicidade
Dado que desejo criar um usuário com o mesmo nome de usuário já existente
Quando eu enviar os dados em duplicidade
Então não terei criado um novo usuário

CreateUserBodyDto
Cenário 5: Deve ser criado o DTO com sucesso
Dado que desejo criar um objeto válido
Quando inserir os dados de usuário
Então terei um objeto de usuário válido

Cenário 6: Não deve ser criado o DTO com sucesso - Nome vazio
Dado que desejo criar um objeto sem nome
Quando inserir os dados sem nome
Então terei um erro informando que o usuário deve ter um nome.

Cenário 7: Não deve ser criado o DTO com sucesso - Email vazio
Dado que desejo criar um objeto sem Email
Quando inserir os dados sem Email
Então terei um erro informando que o usuário deve ter um Email.

Cenário 8: Não deve ser criado o DTO com sucesso - usuario vazio
Dado que desejo criar um objeto sem usuario
Quando inserir os dados sem usuario
Então terei um erro informando que o usuário deve ter um usuario.

Cenário 9: Não deve ser criado o DTO com sucesso - senha vazio
Dado que desejo criar um objeto sem senha
Quando inserir os dados sem senha
Então terei um erro informando que o usuário deve ter um senha.
