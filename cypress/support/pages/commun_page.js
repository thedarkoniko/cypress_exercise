/// <reference types="cypress" />

export default {
    accessRegistrationOfUser(){
        cy.visit('/').get('#top_header')

        cy.get('.fa-lock').click()
    }
}