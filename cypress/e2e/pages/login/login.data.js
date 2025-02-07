export class LoginData{
    static get invalidCredentials(){
        return {
            username: 'abc',
            password: 'invalid_password'
        };
    }
}