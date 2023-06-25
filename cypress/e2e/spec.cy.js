describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('successfully loads and displays Ghibli logo', () => {
    cy.get('img[src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png"]')
      .should('be.visible');
  });

  it('has search input field', () => {
    cy.get('input').should('be.visible');
  });

  it('handles search', () => {
    cy.get('input')
      .type('totoro')
      .should('have.value', 'totoro');
  });

  it('filters movies based on search', () => {
    cy.get('input').type('Spirited Away');
    cy.get('.movie-tile').should('contain', 'Spirited Away');
    cy.get('.movie-tile').should('not.contain', 'Totoro');
  });

  it('displays correct number of pagination buttons', () => {
    cy.get('button').should('have.length', 3);
  });
});