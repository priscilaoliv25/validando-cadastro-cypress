describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {
    
    // Entrando no website escolhido, no caso meupc.net
    cy.visit('https://meupc.net/')

    // Esperando 1 segundo
    cy.wait(1000);

    // Clicando no botão de menu pela classe .navbar-burguer
    cy.get('.navbar-burger').click();

    // Clicando no botão de cadastro pelo 
    cy
    .get('ul.menu-list') // Pegando a ul com a classe .menu-list
    .children('li') // Pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') // Pegando o filho da li que tem o href com valor https://meupc.net/cadastro  
    .click() // Clicar

    // Preenchendo o campo nome do cadastro com o valor teste
    cy.get('input[name="nome"]').type('teste')

    // Preenchendo o campo email do cadastro com o valor teste@teste.com
    cy.get('input[name="email"]').type('teste@teste.com')

    // Preenchendo o campo senha do cadastro com o valor abc1234
    cy.get('input[placeholder="Defina uma senha"]').type('abc1234')

    // Uma forma de pegar um elemento pelo texto
   //  cy.contains('Li e concordo com').click()

     //Clicando no checkbox de aceitar os termos 
     //check para marcar e uncheck para desmarcar
    cy.get('input[type="checkbox"]').check({force:true})

    //Clicando no botão de cadastrar
    cy.contains('Cadastrar-se').click()

    //Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible');
  })
})