describe('Api AdoPet', () => {
    //Atenção, o token possui um prazo de validade. Dessa forma, você deverá realizar o login e copiar o toker presente no Local Storage do seu navegador.
    //Você encontrará um cypress.en.json para entender como o token deve ser inserido no arquivo cypress.env.json

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)//retorno positivo da requisição
            expect(res.body).is.not.empty //garante que o retorno da requisição não seja vazio
            expect(res.body).to.have.property('msg') //retorna uma requisição que tenha tag msg
        })
    })
})