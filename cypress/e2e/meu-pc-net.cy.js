require('@cypress/xpath');
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
    cy.get('input[type="checkbox"]').check({ force: true })

    //Clicando no botão de cadastrar
    cy.contains('Cadastrar-se').click()

    //Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible');
  })

  it.only('Validando login', () => {
    /* Login: testecypress@tuamaeaquelaursa.com
    Senha: testecypress

    VERIFICAR SE A TELA POSSUI O TEXTO "PC atual de TesteCypress"
    */

    cy.visit('https://meupc.net');
    cy.wait(1000);
    cy.get('.navbar-burger').click();
    cy.get('ul.menu-list').children('li').children('a[href="https://meupc.net/login"]').click()

    cy.contains('Email ou nome de usuário').siblings('input').type('testecypress@tuamaeaquelaursa.com');
    cy.xpath('/html/body/main/section/div/div/form/section/div[4]/span/input').type('testecypress'); // Pelo Xpath
    //cy.contains('Senha').siblings('span').children('input').type('testecypress') // Pelo Filho e irmão
    cy.xpath('/html/body/main/section/div/div/form/section/div[5]/button[2]').click(); //Pelo Xpath
    //cy.contains('Cancelar').siblings('button').click(); // Pelo Irmão
    cy.contains('PC atual de TesteCypress').should('be.visible');
  })


})