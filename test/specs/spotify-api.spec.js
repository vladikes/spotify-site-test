const request = require('supertest')('https://api.spotify.com/v1/playlists/5KuPjPP50y2gbC7Yv6mun2/tracks');
var assert = require('assert');
var playlistObj = require("./songs.json");


describe('Spotify tracklist api test run', function() {
  

  it('should return a success status 200', function(done) {
    request
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
  })
  

    it('should compare actual and expected json result', function(done) {
	request
	    .get('/')
	    .end(function(err, result) {
	    	console.log(result);
	    	console.log(result.body);
	        expect(result.body).to.equal(playlistObj);
	        done();
    });
  })
  
})
