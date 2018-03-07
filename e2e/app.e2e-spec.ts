import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('bucket-list App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const navigationText = 'Secure Cloud storage';
    expect(page.getLogoText()).toEqual(navigationText);
  });
});
