chrome.storage.sync.get({
  photoTopics: 'nature,ocean,animals,tropical,colorful',
  definition: false
}, function(items) {
  var url = "https://source.unsplash.com/1500x800/?";
  if(items.definition){
    url = "https://source.unsplash.com/3300x1600/?";
  }
  url += items.photoTopics;
  if(document.getElementById("workspace-container") != null){
    document.getElementById("workspace-container").style.backgroundImage = "url('" + url + "')";
  }
  if(document.getElementsByClassName("kix-appview-editor").length != 0){
    for (var i = 0; i < document.getElementsByClassName("kix-appview-editor").length; i++) {
        document.getElementsByClassName("kix-appview-editor")[i].style.backgroundImage = "url('" + url + "')";
    }
  }
});
