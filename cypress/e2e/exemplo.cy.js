describe('Login', () => {
  
    it('Login com sucesso', () => {
        // Acessar a minha aplicação
        cy.visit('https://automationpratice.com.br')

        //Seleciona o elemento
            .get('#top_header')

        //Seleciona o elemento
        cy.get('.form-control')
                //Digita valores no campo de email
            .type('algperes@gmail.com')
        
        cy.get('.clear .theme-btn-one.btn_md')
            .click() //Clicar no botão
                
        cy.get('#swal2-title')
        // Configura o ASSERT
            .should('be.visible')
            .should('have.text', 'Success')
    } )

    it('Cadastrar e-mail com sucesso apertando o enter', () => {
        
        cy.visit('https://automationpratice.com.br')

        
            .get('#top_header')

        
        cy.get('.form-control')
                //Digita valores no campo de email e aperta o enter
            .type('algperes@gmail.com{enter}')
                               
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Success')
    } )
    
    it('Verificar fechamento do pop-up sucesso', () => {
        
        cy.visit('/')
        
            .get('#top_header')

        
        cy.get('.form-control')
                
            .type('algperes@gmail.com')
                   
        cy.wait(1000)
                               
        cy.get('#swal2-title')
            .should('not.exist')
            
    } )
    
})