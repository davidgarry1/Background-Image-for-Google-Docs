// Saves options to chrome.storage
function save_options() {
  var topics = document.getElementById('topics').value;
  var ultraHD = document.getElementById('uhd').checked;
  chrome.storage.sync.set({
    photoTopics: topics,
    definition: ultraHD
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    photoTopics: 'nature,ocean,animals,tropical,colorful',
    definition: false
  }, function(items) {
    document.getElementById('topics').value = items.photoTopics;
    document.getElementById('uhd').checked = items.definition;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
