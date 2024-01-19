# desafio-entrevista-nodejs - Leilão de Carros

## Objetivo:
Desenvolver uma aplicação backend em Nest.js com Swagger, Prisma.js e autenticação JWT para gerenciar um leilão de carros.
Desenvolver uma aplicação mobile em ReactNative/Expo e web Next.js em que o usuário possa se cadastrar, logar, visualizar leilões, cadastrar leilões e dar um lance.

## Tecnologias obrigatórias

Next.js
Nest.js
Prisma.js
Swagger
JWT para autenticação
React Native / Expo
MongoDB

## Entidades
Exemplo de modelagem (não é necessário seguir à risca)
model User {
  id       String      @id @default(autoincrement())
  name     String
  email    String   @unique
  password String
}

model Auction {
  id               String      @id @default(autoincrement())
  brand            String
  model            String
  year             Int
  startingBid      Float
  auctionStartDate DateTime
  auctionEndDate   DateTime
  creator          User     @relation(fields: [userId], references: [id])
  creatorId        String
  bids             Bid[]
}

type Bid {
  amount   Float
  user     User     @relation(fields: [userId], references: [id])
  userId   String
}

## Funcionalidades:

### Cadastro de Usuários:
Criar um endpoint para cadastro de usuário com os seguintes campos:
Nome
Email
Senha (hash)
Todos os campos são obrigatórios.

### Autenticação:
Implementar autenticação JWT.

### Cadastro de Veículos para Leilão:
Criar um endpoint para cadastrar veículos para leilão com os seguintes campos:
Marca
Modelo
Ano
Lance Inicial
Data de Início do Leilão
Data de Fim do Leilão
Todos os campos são obrigatórios.

### Listagem de Veículos para Usuários:
Criar um endpoint para os usuários visualizarem os veículos disponíveis para leilão.
Retornar informações básicas dos veículos, incluindo o lance inicial e último lance.

### Lance em Leilão:
Criar um endpoint para os usuários darem lances em um veículo específico.
Validar se o lance é maior que o lance atual.

### Controle de Autenticação no Frontend e mobile:
Implementar autenticação JWT.
Usuários só podem visualizar leilões, criar leilões e dar lances se estiverem autenticados.

## Requisitos Técnicos:
- Utilizar Prisma.js para modelagem e interação com o banco de dados MongoDB.
- Documentar a API com Swagger.
- Utilizar JWT para autenticação.
- Utilizar Nest.js, Next.js e Expo.
- Implementar testes
- Implementar testes utilizando TDD (opcional, mas ganha mais pontos).
- O retorno deverá ser em formato JSON;
- Requisições GET, POST, PUT ou DELETE, conforme a melhor prática;


## Ganha mais pontos:

Sumário da quantidade de entrada e saída de veículos.
Sumário da quantidade de entrada e saída de veículos por hora.
Criação de relatórios para visão ao dono do estabelecimento.
Desenvolvimento utilizando TDD.

## Entregáveis:

- Repositório Git com o código-fonte.
- Crie um fork do teste para acompanharmos o seu desenvolvimento através dos seus commits.
- Arquivo README.md descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessárias para executar a aplicação.

## Importante!
- O teste é propositalmente longo, não se preocupe se não concluir tudo a tempo, todavia os itens mais importantes são, código limpo, princípios SOLID, e Testes.
