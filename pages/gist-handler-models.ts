import { Selector ,t} from 'testcafe';

    class gistsHandeler{
    loginLnk: Selector = Selector('a').withText('Sign in');
    createNewGistLnk: Selector = Selector('a').withAttribute('aria-label','Create new gist');
    gistDescriptionTxt: Selector =Selector('input').withAttribute('name','gist[description]');
    gistFileNameTxt: Selector =Selector('input').withAttribute('name','gist[contents][][name]');
    gistContentTxt: Selector =Selector('div').withAttribute('class','CodeMirror-code');
    createMenu: Selector =Selector('summary').withAttribute('aria-label','Select a type of pull request');
    publicSelector: Selector = Selector('span').withText('Create public gist');
    createPublicGistBtn: Selector = Selector('div').withAttribute('class','BtnGroup');
    gistForm: Selector = Selector('form').withAttribute('class','js-comment-update');
    addFileBtn: Selector = Selector('button').withText('Add file');
    updateBtn:  Selector = Selector('button').withText('Update public gist');  

    async createGist(gistDescription, fileName, content){
      await t.typeText(this.gistDescriptionTxt, gistDescription);
      await t.typeText(this.gistFileNameTxt, fileName);
      await t.typeText(this.gistContentTxt, content);
      await t.click(this.createMenu);
      await t.click(this.publicSelector);
      await t.click(this.createPublicGistBtn);
      await t.expect(this.gistForm.exists).ok();
    }

    async addNewFile(fileName, content){
      await t.click(this.addFileBtn);
      await t.typeText(this.gistFileNameTxt.nth(1), fileName);
      await t.typeText(this.gistContentTxt.nth(1), content);
      await t.click(this.updateBtn);
      await t.expect(this.gistForm.exists).ok();
    }
}

export const gistshandlerPage = new gistsHandeler();