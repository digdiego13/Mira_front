describe("basics navegation", () => {
    it("Click on gallery", ()=> {
        cy.visit("http://localhost:3000/");
        cy.get('a[href*="/gallery/1"]').click();
        cy.url().should("equal", "http://localhost:3000/gallery/1");
    })
    it("Click on art", ()=> {
        cy.get('a[href*="/art/1"]:first').click();
        cy.url().should("equal", "http://localhost:3000/art/1");
    })
    it("Back to main page", ()=> {
        cy.get('a[href*="/"]:first').click();
        cy.url().should("equal", "http://localhost:3000/");
    })
    it("Go to Cart", ()=> {
        cy.get('.sc-TBWPX').click();
        cy.get("input[placeholder=e-mail]").type("usuario@email.com");
        cy.get("input[placeholder=password]").type("usuario");
        cy.get("button").click();
        cy.get('.sc-TBWPX').click();
        cy.url().should("equal", "http://localhost:3000/cart");
    })

})
