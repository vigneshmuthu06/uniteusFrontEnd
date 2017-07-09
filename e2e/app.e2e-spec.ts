import { UniteusPage } from './app.po';

describe('uniteus App', () => {
  let page: UniteusPage;

  beforeEach(() => {
    page = new UniteusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
