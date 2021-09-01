describe('Home', () => {
    it('should display home page', () => {
        // Start from the index page
        cy.visit('/');

        // The new page should contain an h1 with "About page"
        cy.get('h1').contains('Bienvenue sur le site des CaenCamp');
    });
});
