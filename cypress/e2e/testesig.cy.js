describe('Login', () => {
    it('Login com sucesso', () => {
        cy.visit('https://sig-homolog.ieclb.org.br/login')

            cy.get('#__BVID__13')
                .type('alexandre.peres')

            cy.get('#__BVID__16')
                .type('@Senha123')

            cy.get('.btn')
                .click()   
    })
})