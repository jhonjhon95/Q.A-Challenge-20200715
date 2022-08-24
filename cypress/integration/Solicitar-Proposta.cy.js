const faker = require("faker-br");

context('Solicitar proposta...', () => {

    it('Abrindo o Site - Validando carregamento site...', () => {
        cy.visit('https://beta.coodesh.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.text-secondary > a')   //carregou corretamente ???
    })

    it('Valida Contato...', () => { 

        cy.get(':nth-child(1) > .nav-link').click()

        const CompleteName = cy.faker.name.firstName() + ' ' + faker.name.lastName() //nome
        const Email = cy.faker.internet.email() //email
        const Telefone = cy.faker.phone.phoneNumber() //telefone
        const Empresa = cy.faker.company.companyName() //empresa
        const Cargo = cy.faker.commerce.product() //cargo
        const Cidade = cy.faker.address.city() //cidade
        

        cy.get('.order-sm-2 > .list-group-flush > :nth-child(3) > .u-header__nav-link').click()
        cy.get('#representative\\.displayName').type(CompleteName) //digita nome
        cy.get('#representative\\.email').type(Email) //digita email
        cy.get('.react-tel-input > .form-control').type('9999' + Telefone) //digita telefone
        cy.get('#company_name').type(Empresa) //digita nome empresa
        cy.get('#representative\\.job_position').type(Cargo) //digita cargo
        cy.get('#representative\\.city').type(Cidade) //digita cidade

        cy.get('#tech_size').select('21-50') //seleciona tamanho equipe

        cy.get("#privacy\\.gpdr").click() // aceita termos de uso
        cy.get('.btn-wide').click() // clica em solicitar agora

    })

})