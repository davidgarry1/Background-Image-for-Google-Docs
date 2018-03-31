chrome.storage.sync.get({
  photoTopics: 'nature,ocean,scenic,paradise,tropics,sky',
  definition: false,
  featured: true
}, function(items) {
  var url = "https://source.unsplash.com/1500x800/?";
  if(items.definition){
    url = "https://source.unsplash.com/3300x1600/?";
  }
  url += items.photoTopics;
  if(items.featured){
    url += ",featured";
  }
  if(document.getElementById("workspace-container") != null){
    document.getElementById("workspace-container").style.backgroundImage = "url('" + url + "')";
  }
  if(document.getElementsByClassName("kix-appview-editor").length != 0){
    for (var i = 0; i < document.getElementsByClassName("kix-appview-editor").length; i++) {
        document.getElementsByClassName("kix-appview-editor")[i].style.backgroundImage = "url('" + url + "')";
    }
  }
});
