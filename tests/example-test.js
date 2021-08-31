  
// import HomePage from '../page-objects/home-page';
// import ResultPage from '../page-objects/result-page';
// import LoginPage from '../page-objects/login-page';
import AuthPage from '../page-objects/auth-page';

fixture('Example')
  .page('https://it1-onlinebanking.usbank.com/auth/login')
  
  test('Redirect to login page', async t => {
    // await HomePage.search('São paul');
    // await ResultPage.clickSeeMoreResults();
    await t.expect(AuthPage.loginHeadingContent).eql("Account login");
  }); 
