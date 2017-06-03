import { DowndogPage } from './app.po';

describe('downdog App', () => {
  let page: DowndogPage;

  beforeEach(() => {
    page = new DowndogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dd works!');
  });
});
