import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../pages/loginPage";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";

Given("que usuario acessa a página de login do sistema", () => {

  loginPage.visit();

});

When("realiza o login com credenciais válidas", () => {

  loginPage.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));

});

When("busca pelo produto {string}", (produto) => {
  productPage.search(produto);

});

When("adiciona o produto ao carrinho de compras", () => {

  productPage.addFirstProduct();


});

When("o produto deve ser validado com sucesso na tela de checkout", () => {

  cartPage.validateProduct("Blue Top");
  cartPage.proceedToCheckout();

});

Then("finaliza a venda do produto", () => {

  checkoutPage.placeOrder();
  checkoutPage.fillPayment();
  checkoutPage.validateSuccess();

});