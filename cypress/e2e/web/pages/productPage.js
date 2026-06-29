class productPage {

    search(produto) {
        cy.get('a[href="/products"]').click();
        cy.get('#search_product').type(produto);
        cy.get('#submit_search').click();
    }

    addFirstProduct() {
        cy.get('.productinfo .add-to-cart').first().click();
        cy.contains('Your product has been added to cart')
            .should('be.visible');
        cy.get('.modal-body [href="/view_cart"]').click();
    }


}

export default new productPage();