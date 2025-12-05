/// <reference types="cypress" />

export default {
    clickOnRegister() {
        cy.get('#btnRegister').click()
    },

    // validateErrorMsg () {
    //     cy.get('.errorLabel').then((element) => {
    //         expect(element).to.be.visible
    //         expect(element.text()).eq('O campo nome deve ser prenchido')

    //     })
    //},

    validateErrorMsg (message) {
        cy.get('.errorLabel').should('be.visible')
        .should('have.text', message)
         
},

    fullUpName(name) {
        cy.get('#user').type(name)
    }, 

    fullUpEmail(email) {
        cy.get('#email').type(email)
    },

    fullUpPassword(pasword) {
        cy.get('#passwordM').type(pasword)
    },
    validateMesageSucess(name) {
        cy.get('#swal2-title').should('be.visible')
        .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container').should('be.visible').should('have.text', `Bem-vindo ${name}`)
    }



}