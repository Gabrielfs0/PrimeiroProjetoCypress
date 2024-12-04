describe('Página de cadastro', () => {
  
beforeEach(() => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/');
  cy.get('[data-test="register-button"]').click();
})

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    
    cy.cadastrar('Gabriel Franco','gf12166@gmail.com','Jogabola22');
  
  })
})