class checkoutPage {

    placeOrder() {
        cy.contains('Place Order').click();
    }

    fillPayment() {
        cy.get('[data-qa="name-on-card"]').type('MasterCard');
        cy.get('[data-qa="card-number"]').type(Cypress.env("CARD_NUMBER"));
        cy.get('[data-qa="cvc"]').type(Cypress.env("CARD_CVC"));
        cy.get('[data-qa="expiry-month"]').type(Cypress.env("CARD_EXP_MONTH"));
        cy.get('[data-qa="expiry-year"]').type(Cypress.env("CARD_EXP_YEAR"));
        cy.get('[data-qa="pay-button"]').click();
    }

    validateSuccess() {
        cy.contains('Congratulations! Your order has been confirmed!', { timeout: 5000 })
            .should('be.visible');
        cy.get('[data-qa="continue-button"]')
            .click();
    }

}

export default new checkoutPage();