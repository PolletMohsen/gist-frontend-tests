import { Selector ,t} from 'testcafe';

class gistsListPage{
    viewGistLnk: Selector = Selector('div').withAttribute('class','gist-snippet');
    commentTxt: Selector = Selector('textarea').withAttribute('id','new_comment_field');
    commentBtn: Selector = Selector('button').withText('Comment');
    commentedText: Selector = Selector('p');
    editLnk: Selector = Selector('a').withAttribute('aria-label','Edit this Gist');
    

    async commentOnGist(comment){
        await t.typeText(this.commentTxt, comment);
        await t.click(this.commentBtn);
   }
   
}

export const gistslistPage = new gistsListPage();