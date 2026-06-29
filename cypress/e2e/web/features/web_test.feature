Feature: Fluxo de Compra no Automation Exercise

Scenario: Realizar login, buscar produto, validar no carrinho e finaliza a venda do produto

Given que usuario acessa a página de login do sistema
When realiza o login com credenciais válidas
And busca pelo produto "Blue Top"
And adiciona o produto ao carrinho de compras
And o produto deve ser validado com sucesso na tela de checkout 
Then finaliza a venda do produto