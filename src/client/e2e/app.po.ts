import { browser, by, element } from 'protractor';

export class DowndogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dd-root h1')).getText();
  }
}
