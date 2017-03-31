import { TfsTodolistPage } from './app.po';

describe('tfs-todolist App', () => {
  let page: TfsTodolistPage;

  beforeEach(() => {
    page = new TfsTodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
