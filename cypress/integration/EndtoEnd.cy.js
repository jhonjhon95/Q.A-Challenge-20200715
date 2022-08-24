const faker = require("faker-br");

context('Testar fluxo Completo de candidatura', () => {

    it('Abrindo o Site - Validando carregamento site...', () => {
        cy.visit('https://beta.coodesh.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.text-secondary > a')   //carregou corretamente ???
    })

    it('Validando Pesquisa Vagas - Validando listagem de vaga...', () => { 
        cy.get(':nth-child(1) > .nav-link').click()
        cy.get('.col-lg-7 > .input-group > .form-control').type('PiedPiper').type('{enter}') //listou as vagas?
        cy.get(':nth-child(7) > .card > .p-3 > .d-lg-flex > .d-flex > .pr-4 > .h4') // pegou um elemento listado
        // poderia ter uma CAIXA DE TEXTO informando quantos resultados foram encontrados para validar que existem resultados
    })

    it('Validar Vaga - Validando carregamento Vaga...', () => {
        cy.get(':nth-child(7) > .card > .p-3 > .d-lg-flex > .d-flex > .pr-4 > .h4').click()
        cy.get('.mb-lg-0.d-none > .styleJobDescription') //Carregou descritivo geral vaga ??
        cy.get('.mb-lg-0.d-none > .styleJobDescription > :nth-child(2) > p') //descrição ?
        cy.get('.mb-lg-0.d-none > .styleJobDescription > :nth-child(4) > .text-secondary > :nth-child(1) > .btn') // habildades ?
        cy.get('.mb-lg-0.d-none > .styleJobDescription > :nth-child(6) > .mb-0 > :nth-child(1) > .media > .text-secondary') //requisitos ?
        cy.get('.mb-lg-0.d-none > .styleJobDescription > :nth-child(8) > .mb-0 > :nth-child(2) > .media > .text-secondary') // diferenciais ?
        cy.get('.mb-lg-0.d-none > .styleJobDescription > :nth-child(10) > .mb-0 > :nth-child(1) > .media > .text-secondary') // beneficios ?
    })

    it('Inserir dados cadastro...', () => {

        const CompleteName = cy.faker.name.firstName() + ' ' + faker.name.lastName()
        const Email = cy.faker.internet.email()
        const Password = cy.faker.internet.password() + ('@12Q')

        cy.get('[style="top: 80px; transform: translateZ(0px);"] > .mb-lg-0 > .pl-lg-4 > :nth-child(2) > :nth-child(8) > .m-0 > .btn-primary').click()
        cy.get('#displayName').type(CompleteName)
        cy.get('#email').type(Email)
        cy.get('#password').type(Password)
        cy.get("#privacy\\.gpdr").click() //usar sempre duas barras em elementos para evitar conflitos
        cy.get('.mb-5 > .transition-3d-hover').click()
    })

    it('Inserir dados candidatura...', () => {

        const Cidade = cy.faker.address.city()
        const Telefone = cy.faker.phone.phoneNumber()

        cy.wait(15000)
        cy.get('#city').should('be.visible')
        cy.get('#city').type(Cidade)
        cy.get('.react-tel-input > .form-control').type('9999' + Telefone)
        cy.get('#home_office').select('Presencial') 
        cy.get('#salary_range\\.min').clear().type(5000) // colocar sempre duas barras -> \\ limpar antes de digitat
        cy.get('#salary_range\\.max').clear().type(10000) // colocar sempre duas barras -> \\ limpar antes de digitat
        cy.get('#linkedin').type('https://www.linkedin.com/in/jhonatan-magalh%C3%A3es-do-vale-79876a15/')
        cy.get('#github').type('https://github.com/jhonjhon95') 
        cy.get("input[type=file]").attachFile("cv.pdf") //upload arquivo - Setando caminho arquivo
        cy.get("input[id='custom-file']").click() //clicando e fazendo upload no site
        //cy.get('.m-0 > .fas').click() // fecha popup de nova versão página
        cy.get('.border-top-0 > .transition-3d-hover').click() // clicando em salvar
        cy.wait(5000)
        cy.get('.space-bottom-2 > :nth-child(2) > :nth-child(1) > .card > .p-3 > .d-lg-flex') // validando existencia da vaga cadastrada

    })
})