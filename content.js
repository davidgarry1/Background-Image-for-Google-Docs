chrome.storage.sync.get({
	photoTopics: 'nature,ocean,scenic,paradise,tropics,sky',
	definition: false,
	featured: true,
	photoURL: '',
	slidesEnabled: true,
	docsEnabled: true,
	type: 'curated'
}, function(items) {
	var url = "";
	if(items.type == 'curated'){
		url = "https://source.unsplash.com/1600x900/?";
		if (items.definition) {
			url = "https://source.unsplash.com/3200x1800/?";
		}
		url += items.photoTopics;
		if (items.featured) {
			url += ",featured";
		}
	} else {
		url = items.photoURL;
	}
	//Set background
	if (items.slidesEnabled && document.getElementById("workspace-container") != null) {
		document.getElementById("workspace-container").style.backgroundImage = "url('" + url + "')";
	}
	if (items.docsEnabled && document.getElementsByClassName("kix-appview-editor").length != 0) {
		for (var i = 0; i < document.getElementsByClassName("kix-appview-editor").length; i++) {
			document.getElementsByClassName("kix-appview-editor")[i].style.backgroundImage = "url('" + url + "')";
		}
	}
});
