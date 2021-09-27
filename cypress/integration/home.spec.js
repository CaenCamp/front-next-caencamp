describe('Home', () => {
    it('should display home page', () => {
        // Start from the index page
        cy.visit('/');

        cy.get('h1').contains('Bienvenue sur le site du CaenCamp');
    });
});
