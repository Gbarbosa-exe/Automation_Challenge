class cartPage {

  validateProduct(product) {
    cy.get('.cart_description h4 a')
      .should('contain.text', product);
  }

  proceedToCheckout() {
    cy.get('.check_out').click();
  }

}

export default new cartPage();