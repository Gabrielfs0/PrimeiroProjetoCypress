describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
    it('Verifica imagens dos animais', () =>{
        
        cy.get('.cards').should('be.visible');
    })
 
});