import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('bucket-list App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('user cannot login without valid token', () => {
    page.navigateTo();
    const navigationText = 'Secure Cloud storage';
    expect(page.getLogoText()).toContain(navigationText);

    const invalidToken = 'invalidToken';
    page.getTokenInputField().sendKeys(invalidToken);
    page.getLoginButton().click();
    expect(page.getBodyText()).not.toContain('Logout');
  });

  it('user can login with valid token', () => {
    page.navigateTo();
    browser.waitForAngular();
    expect(page.getBodyText()).not.toContain('Logout');

    const secretToken = '************************************';
    page.getTokenInputField().sendKeys(secretToken);
    page.getLoginButton().click();
    browser.waitForAngular();

    expect(page.getBodyText()).toContain('Logout');
  });
});
