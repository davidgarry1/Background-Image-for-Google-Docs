//This is run every time a user visits a google doc or slide page
chrome.storage.sync.get({
    photoTopics: 'nature,ocean,scenic,paradise,tropics,sky',
    definition: false,
    featured: false,
    blurred: true,
    photoURL: '',
    slidesEnabled: true,
    docsEnabled: true,
    type: 'curated',
}, function (items) {
    var url = "";
    //if curated selection
    if (items.type == 'curated') {
        //lower res
        url = "https://picsum.photos/1920/1080?";
        if (items.definition) {
            //higher res
            url = "https://picsum.photos/3200/1800?";
        }

        // add photo topics
        // url += items.photoTopics;

        // Greyscale
        if (items.featured) {
            url += "grayscale";
        }
        if (items.blurred) {
            if (items.featured) {
                url += "&";
            }
            url += "blur=10";
        }
        //if custom url selection
    } else {
        url = items.photoURL;
    }
    //Set background if on slides page
    if (items.slidesEnabled && document.getElementById("workspace-container") != null) {
        document.getElementById("workspace-container").style.backgroundImage = "url('" + url + "')";
    }
    //Set background if on docs page
    if (items.docsEnabled && document.getElementsByClassName("kix-appview-editor").length != 0) {
        for (var i = 0; i < document.getElementsByClassName("kix-appview-editor").length; i++) {
            document.getElementsByClassName("kix-appview-editor")[i].style.backgroundImage = "url('" + url + "')";
        }
    }
});