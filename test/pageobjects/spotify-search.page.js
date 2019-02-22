import Page from './page';
import utl   from '../../utilities/common-utilities';


class SearchPage extends Page {

    /**
    * define elements
    */

    get songnameInput()   { return $('//*[@class="SearchInputBox__input"]'); }
    get playBarContent()     { return $('//*[@class="now-playing-bar-container"]'); }
    get searchResultContent()     { return $('//*[@class="tracklist"]'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('search/recent')       //this will append `search/recent` to the baseUrl to form complete URL
        browser.pause(3000);
    }
    /**
     * your page specific methods
     */

    waitForSearchPageToLoad () {
      if(!this.playBarContent.isDisplayed()){
        this.playBarContent.waitForDisplayed(8000);
      }
    }


    waitForSearchResultPage () {
      if(!this.searchResultContent.isDisplayed()){
        this.searchResultContent.waitForDisplayed(8000);
      }
    }


    search (songname) {
      this.waitForSearchPageToLoad();
      this.songnameInput.setValue(songname);
      this.waitForSearchResultPage();

    }
}


export default new SearchPage()
