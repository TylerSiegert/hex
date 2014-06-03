function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
  description: 'dapi: Search the Drupal API for %s'
  });
}
resetDefaultSuggestion();

function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: url});
  });
}

function findTwitchStream(query) {
	/*	curl -H 'Accept: application/vnd.twitchtv.v2+json' \
	 *	-X GET https://api.twitch.tv/kraken/search/streams?q=starcraft
	 */	
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("https://api.drupal.org/api/drupal/7/search/" + text);
});
