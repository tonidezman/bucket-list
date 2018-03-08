import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBodyText() {
    return element(by.css('body')).getText();
  }

  getLogoText() {
    return element(by.css('app-root h3')).getText();
  }

  getLabelText() {
    return element(by.css('label')).getText();
  }

  getLoginButton() {
    return element(by.css('#login-btn'));
  }

  getTokenInputField() {
    return element(by.css('#token'));
  }
}
