describe('API Trello', () => {

  it('Deve validar status e campo list.name', () => {

    cy.request('GET', 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((response) => {

        expect(response.status).to.eq(200);

        const listName = response.body.data.list.name;

        cy.log('List Name: ' + listName);

        expect(listName).to.exist;

      });

  });

});