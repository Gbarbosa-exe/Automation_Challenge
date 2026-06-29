#  Cypress Automation Framework (Web + API)

Projeto de automação de testes Web e API utilizando Cypress com Cucumber (BDD), aplicando boas práticas de organização e estrutura de testes.

---

#  Tecnologias utilizadas

- Cypress
- Cucumber (BDD) - @badeball/cypress-cucumber-preprocessor
- ESBuild Preprocessor
- JavaScript (Node.js)
- Dotenv

---

# Estrutura do projeto

```text
cypress/
│
├── e2e/
│   ├── web/
│   │   ├── features/
│   │   ├── steps/
│   │   └── pages/
│   │
│   ├── api/
│   │   └── trello_api.cy.js
│
├── fixtures/
├── support/

Pré-requisitos:

Node.js (versão LTS recomendada)
npm
Git (opcional)

Instalação
npm install

Execução dos testes
Abrir Cypress
npm run cypress:open
Executar testes em modo headless
npm run cypress:run

Testes Web (BDD)

Fluxo automatizado:

Login no sistema
Busca de produto
Adição ao carrinho
Validação no checkout
Finalização da compra
🔌 Testes de API

Validação do endpoint:

GET https://api.trello.com/1/actions/592f11060f95a3d3d46a987a

Validações realizadas:

Status code 200
Estrutura da resposta
Campo data.list.name

Arquitetura:
Page Objects para organização da camada de UI
Cucumber para escrita de cenários BDD
Steps para implementação dos testes
API tests isolados
Variáveis de ambiente via dotenv
 
Variáveis de ambiente
Criar arquivo .env na raiz do projeto:

EMAIL=
PASSWORD=

CARD_NUMBER=
CARD_CVC=
CARD_EXP_MONTH=
CARD_EXP_YEAR=

Uso no projeto:

Cypress.env("EMAIL")
Cypress.env("PASSWORD")
🧠 Boas práticas aplicadas
Separação Web e API
Page Objects
BDD com Cucumber
Uso de variáveis de ambiente
Estrutura organizada e escalável