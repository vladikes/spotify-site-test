
import SearchPage from '../pageobjects/spotify-search.page';
import assert from 'assert';
import utl from '../../utilities/common-utilities';


/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('spotify.com login page', function() {
  it('should allow user to login ', function () {
    SearchPage.open();     // navigating to spotify search page
    SearchPage.search('I am the champion');    // entering the song name
  });


});
