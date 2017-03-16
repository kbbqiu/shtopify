
window.onload = function() {
	const el = document.getElementById('clickme');
	el.onclick = function() {
		if (el.checked) {
      // for changing hide
       chrome.storage.sync.set({
        'disappear': 'false'
  }, function() {

  }); // end change hide
			chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    	});
		} else if (document.getElementById('no')) {
			alert('bye');
			document.getElementByTagName('input').disabled = true;
		}
	}
}