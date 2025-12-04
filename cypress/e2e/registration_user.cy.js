/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

import commun_page from '../support/pages/commun_page'
import register_page from '../support/pages/registration_user'


describe('Registration of a user ', () => {

    beforeEach('Acess registration page ', () => {
        commun_page.accessRegistrationOfUser()

    })

    
    it('Empty name field ', () => {
        register_page.clickOnRegister()
        register_page.validateErrorMsg('O campo nome deve ser prenchido')

    })

    it('Empty email field ', () => {
        register_page.fullUpName(faker.person.fullName())
        register_page.clickOnRegister()
        register_page.validateErrorMsg('O campo e-mail deve ser prenchido corretamente')


    })

    it('Invalid email field', () => {
        register_page.fullUpName(faker.person.fullName())
        register_page.fullUpEmail(faker.person.firstName())
        register_page.clickOnRegister()
        register_page.validateErrorMsg('O campo e-mail deve ser prenchido corretamente')

    })

    it('Empty pasword field', () => {
        register_page.fullUpName(faker.person.fullName())
        register_page.fullUpEmail(faker.internet.email())
        register_page.clickOnRegister()
        register_page.validateErrorMsg('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Invalid password field ', () => {
        register_page.fullUpName(faker.person.fullName())
        register_page.fullUpEmail(faker.internet.email())
        register_page.fullUpPassword('123')
        register_page.clickOnRegister()
        register_page.validateErrorMsg('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Registration with sucess',async () => {
       const name = faker.person.fullName()

        register_page.fullUpName(name)
        register_page.fullUpEmail(faker.internet.email())
        register_page.fullUpPassword('123456')
        register_page.clickOnRegister()
        register_page.validateMesageSucess(name)


    })


})