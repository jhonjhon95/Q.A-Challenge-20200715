const faker = require("faker-br");

context('Validando Links Site...', () => {

    it('Abrindo o Site - Validando carregamento site...', () => {
        cy.visit('https://beta.coodesh.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.text-secondary > a')   //carregou corretamente ???
    })

    it('Valida Texto sobre privacidade...', () => {

        cy.get('.text-secondary > a').click()
        cy.get('.mb-7 > :nth-child(29)') //existe texto ?
    })

    it('Valida Termos e Condições...', () => {

        cy.get(':nth-child(4) > .list-group-flush > :nth-child(1) > .u-header__nav-link').click()
        cy.get('.text-primary') //existe texto ?
    })

    it('Valida Politica de Cookies...', () => { 

        cy.get(':nth-child(4) > .list-group-flush > :nth-child(2) > .u-header__nav-link').click()
        cy.get('.text-white') //existe texto ?
    })

    it('Valida Consentimento LGPD...', () => { 

        cy.get(':nth-child(4) > .list-group-flush > :nth-child(4) > .u-header__nav-link').click()
        cy.get('#ot-pc-desc') //existe texto ?
        cy.get('.ot-pc-refuse-all-handler').click() //aceitar todos os cookies
    })

    it('Valida Quem Somos...', () => { 

        cy.get('.order-sm-2 > .list-group-flush > :nth-child(1) > .u-header__nav-link').click()
        cy.get('.mb-11 > :nth-child(2)')

    })

})