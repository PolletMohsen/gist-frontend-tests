import { Selector ,t} from 'testcafe';

class loginPage {
    emailInput : Selector = Selector('input').withAttribute(
          'id',
          'login_field',
      );
    passwordInput : Selector = Selector('input').withAttribute(
        'id',
        'password',
    );
    loginSubmitButton : Selector = Selector('input').withAttribute(
        'name',
        'commit',
    );

    async login(username:string, password:string){
        await t.typeText(this.emailInput, username);
        await t.typeText(this.passwordInput, password);
        await t.click(this.loginSubmitButton);
        
    }
    }

    export const loginModel = new loginPage();