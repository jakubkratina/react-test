/// <reference types="Cypress" />

context('Render', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('shows empty header', () => {
        cy.get('.header')
            .should('be.empty');
    });

    it('displays list of items', () => {
        cy.get('.List li')
            .should('have.length', 800);
    });

    it('checks for missing is-chosen class', () => {
        cy.get('.List li.List__item--is-chosen')
            .should('have.length', 0);
    });

    it('toggles a item\'s class', () => {
        cy.get('.List li')
            .first()
            .click()
            .should('have.class', 'List__item--is-chosen');

        cy.get('.List li')
            .first()
            .invoke('text')
            .then(value => {
                cy.get('.header')
                    .should('contain', value);
            });
    });
});
