import {LoginElements} from './login.elements';

export class LoginMethods {
    //Inserta el usuario
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickLoginButton(){
        LoginElements.buttons.login.click()
    }

    //Simplificamos el acceso del login, mandando a llamar los 3 metodos
    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickLoginButton()
    }
}