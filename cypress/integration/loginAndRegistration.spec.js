
describe("logon", () => {
    it("Correct cadastration", ()=> {
        cy.visit("http://localhost:3000/sign-up");
        cy.get("input[placeholder=e-mail]").type("usuario@email.com");
        cy.get("input[placeholder=name]").type("usuario");
        cy.get("input[placeholder=password]").type("usuario");
        cy.get("input[placeholder='Confirm password']").type("usuario");
        cy.get("input[placeholder=Adress]").type("Rua teste");
        cy.get("button").click();
    })
})


 describe("Login", () => {
   it("should login successfully", () => {
     cy.visit("http://localhost:3000/sign-in");
     cy.get("input[placeholder=e-mail]").type("usuario@email.com");
     cy.get("input[placeholder=password]").type("usuario");
     cy.get("button").click();
     cy.url().should("equal", "http://localhost:3000/");
   });
 });
