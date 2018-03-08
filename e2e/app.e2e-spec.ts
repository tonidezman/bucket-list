import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('bucket-list App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('displays Logo text', () => {
    page.navigateTo();
    const navigationText = 'Secure Cloud storage';
    expect(page.getLogoText()).toContain(navigationText);
  });

  it('does not automatically login user without token', () => {
    page.navigateTo();
    browser.getCurrentUrl().then(function(url) {
      browser.get(url + 'login');
    });
    browser.waitForAngular();
    expect(page.getBodyText()).not.toContain('Logout');
    page.getLoginButton().click();
    expect(page.getBodyText()).not.toContain('Logout');
  });

  xit('log in user', () => {
    page.navigateTo();
    browser.getCurrentUrl().then(function(url) {
      browser.get(url + 'login');
    });
    browser.waitForAngular();
    expect(page.getBodyText()).not.toContain('Logout');
    const secretToken = '************************************';
    browser.waitForAngular();
    page.getTokenInputField().sendKeys(secretToken);
    page.getLoginButton().click();
    expect(page.getBodyText()).toContain('Logout');
  });
});
