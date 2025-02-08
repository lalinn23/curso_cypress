import { LoginMethods } from './pages/login/login.methods'

describe("Inicio de Sesion", () => {
  it("Entra al login Rancho Acero", () => {
    const usuario = 'almaras01';
    const contrasena = 'carlos12345';
    cy.visit('http://192.168.1.218:8080/#/')
    LoginMethods.login(usuario, contrasena)
    cy.get('.navbar-brand').should('contain.text', 'Inicio') //identifica Inicio si se logea bien
    cy.wait(1000)
  }) 
 
})
//llamar a los metodos mas simplificando 2
/*
describe("Inicio de Sesion", () => {
  it("Entra al login Rancho Acero", () => {
    cy.visit('http://192.168.1.218:8080/#/')
    LoginMethods.login('user','pass')
    cy.wait(5000)
  })
})
*/
//Esta una forma de llamar a los metodos 3
/*
describe("Inicio de Sesion", () => {
  it("Entra al login Rancho Acero", () => {
    cy.visit('http://192.168.1.218:8080/#/')
    LoginMethods.insertUsername('hola')
    LoginMethods.insertPassword('hollaaaaaa')
    LoginMethods.clickLoginButton()
  })
})
*/

//esta es la forma mas basica
/**
 * describe("Inicio de Sesion", () => {
    it("Entra al login Rancho Acero", () => {
        cy.visit('http://192.168.1.218:8080/#/')
        cy.get('input[name="username"]').type('almaras01')
        cy.get('input[name="password"]').type('carlos12345')
        cy.get('button[type="submit"]').click() 
    }) 
   
})
 * 
 */