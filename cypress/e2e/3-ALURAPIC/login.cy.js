describe('Testes login', ()=>{

    beforeEach(() => {
        cy.visit('/')
    
    })

    it('fazer login de usuario valido', ()=>{
        cy.login(Cypress.env('username'),Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');  
      })
    
      it('fazer login de usuario invalido', ()=>{
        cy.login('jacqueline','1234');
        cy.on('window:alert',(str)=>{
          expect(str).to.equal('Invalid username or password');
        })
      })
    

})