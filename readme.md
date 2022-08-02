# PDI GAZIN | API para uma página compactada para registrar usuários e enviar um bônus por e-mail (escrito em Node.js e TypeScript em uma arquitetura limpa).

# Conceitos Usados no desenvolvimento da API 
- [*Clean Architecture*](https://fullcycle.com.br/o-que-e-clean-architecture/)
- [*Domain-Driven Design*](https://fullcycle.com.br/domain-driven-design/)
- [*Test-Driven Development(TDD)*](https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533)
- [*Continuos Refactoring*](https://www.codit.eu/blog/continuous-refactoring/)

# Tecnologias e Informações
- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

# Instalação e execução

1) Renomeie o arquivo `.env.example` para `.env`
> Esse arquivo contem variáveis de ambiente e não é versionado
`cp .env.example .env`

2) Suba os container
> Com esse comando vamos subir e destravar o terminal
`docker compose up -d`

### Scripts de testes
 Testes unitários 
`docker compose exec api npm run test:unit`

 Testes de integração
`docker compose exec api npm run test:integration"`


### Rota Para realizar POST
☀️ `http://localhost:3030/api/register`
 Body:
{ "name": "Alisson",
  "email": "alisson_seiji_aoki@hotmail.com" } 
 