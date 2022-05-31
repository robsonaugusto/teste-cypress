/// <reference types="cypress" />

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.eq(3) //pega pelo numero da lista
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()


    });

    it.only('Deve adicionar ao carrinho', () => {
        var quantidade = 3


        cy.get('[class="product-block grid"]')
            .eq(3).click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Green').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)


    });

    it('Deve adiconar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 3)
    });

});