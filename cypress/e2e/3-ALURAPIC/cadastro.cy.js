describe('registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('/')
  
     })
     //teste com json  
const usuarios = require('../../fixtures/usuarios.json');
usuarios.forEach(usuario => {
  it.only('Criar um novo usuario '+usuario.userName, ()=>{
    cy.registraUsuario(usuario.email,usuario.fullName,usuario.userName,usuario.passsword);

  })
})

})

