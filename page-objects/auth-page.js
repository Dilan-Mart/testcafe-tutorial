import { Selector } from 'testcafe';

class AuthPage {
    get loginHeading() { return Selector("h1#login-in-to-account") }
    get loginHeadingContent() { return this.loginHeading.textContent }
}

export default new AuthPage();