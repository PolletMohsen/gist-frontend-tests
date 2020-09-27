import ('testcafe');
import { loginModel } from '../pages/login-models'
import { gistshandlerPage } from '../pages/gists-handler-models'
import { gistslistPage } from '../pages/gists-list-models'
import { ClientFunction } from 'testcafe';
const userName = 'testusername';
const password = 'password';

fixture('Happy Scenarios of Gist').beforeEach( async t => {
    await t.navigateTo('https://github.com/login');
    await loginModel.login(userName, password);
})
    test('Should be able to login successfully', async t => {
        const getURL = ClientFunction(() => window.location.href);
        const url = await getURL();
        await t.expect(url).eql('https://github.com/');
    });

    test('Shoule be able to create new public gist successfully', async t=>  {
        await t.navigateTo('https://gist.github.com/');
        await t.click(gistshandlerPage.createNewGistLnk);
        await gistshandlerPage.createGist('Description automation test 2', 'File name test','hi content');
    });
    
    test('Shoule be able to add comments to created gist', async t=> {
      await t.navigateTo('https://gist.github.com/');
      await t.click(gistshandlerPage.createNewGistLnk);
      await gistshandlerPage.createGist('Description automation test 2', 'File name test','hi content');
      await gistslistPage.commentOnGist('testcomment');
      await t.wait(1000);
      await gistslistPage.commentOnGist('testcomment2');
      await t.expect(await gistslistPage.commentedText.textContent).eql('testcomment');  
    });

    test('Shoule be able to edit gist successfully', async t=> {
      await t.navigateTo('https://gist.github.com/');
      await t.click(gistshandlerPage.createNewGistLnk);
      await gistshandlerPage.createGist('Description automation test 2', 'File name test','hi content');
      await t.click(gistslistPage.editLnk);
      await gistshandlerPage.addNewFile('NewFile name', 'new content');
    });
