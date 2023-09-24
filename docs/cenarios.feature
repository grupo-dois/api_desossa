Cenário 1: Realizar um login com sucesso
Dado que tenho um usuário e senha
Quando realizar o login utilizando as credenciais 
Então estarei logado com sucesso

Cenário 2: Realizar um login com a senha inválida
Dado que tenho um usuário e uma senha inválida
Quando realizar o login utilizando as credenciais 
Então não estarei autorizado a utilizar o sistema

Cenário 3: Realizar um login com a usuário inválido
Dado que tenho um usuário inválido e um senha
Quando realizar o login utilizando as credenciais 
Então não estarei autorizado a utilizar o sistema

Cenário 4: Realizar um login com um corpo de envio diferente
Dado que tenho um nome e uma idade
Quando realizar o login utilizando este corpo
Então não estarei autorizado a utilizar o sistema

Cenário 5: Adicionar um novo usuário com sucesso
Dado que tenho os dados do usuário
Quando adicionar ao sistema
Então o usuário será cadastrado

Cenário 6: Adicionar um novo usuário igual de um usuário existente na base
Dado que tenho os dados do usuario
Quando adicionar o usuario com um mesmo nome de um existente
Então o usuario não será cadastrado

Cenário 7: Adicionar um novo usuário com nome em branco
Dado que tenho os dados do usuario
Quando adicionar o usuario com o nome em branco
Então o usuario não será cadastrado

Cenário 8: Adicionar um novo usuário com email em branco
Dado que tenho os dados do usuario
Quando adicionar o usuario com o email em branco
Então o usuario não será cadastrado

Cenário 9: Adicionar um novo usuário com a senha em branco
Dado que tenho os dados do usuario
Quando adicionar o usuario com o senha em branco
Então o usuario não será cadastrado

Cenario 10: Realizar a busca de dados de um usuário
Dado quero realizar a busca de um usuário que estou logado
Quando realizar a busca
Então os dados não sensiveis do usuário será retornado

Cenario 11: Adicionar um usuário sem permissão
Dado que quero adicionar um novo usuario sem permissão para adicionar
Quando eu adicionar o novo usuário
Então será informado que não é autorizado adicionar o usuário