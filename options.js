// Saves options to chrome.storage.sync.
function save_options() {
  var startTime = Number(document.getElementById('start-time').value);
  var endTime = Number(document.getElementById('end-time').value);
  var startMin = Number(document.getElementById('start-min').value);
  var endMin = Number(document.getElementById('end-min').value);
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var likesSafe = document.getElementById('like').checked;
  var disappear = 'true';

  startTime = startTime + startMin;
  endTime = endTime + endMin;

  if (start === 'PM') startTime = startTime + 12;
  if (end === 'PM') startTime = startTime + 12;

  chrome.storage.sync.set({
    'startTime': startTime,
    'endTime': endTime,
    'disappear': disappear,
    'likesColor': likesSafe
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'startTime': '10',
    'endTime': '4',
    'startMin': '00',
    'endMin': '00',
    'start': 'PM',
    'end': 'AM',
    'disappear': 'true',
    'likesSafe': true
  }, function(items) {
    document.getElementById('start-time').value = items.startTime;
    document.getElementById('end-time').value = items.endTime;
    document.getElementById('start-min').value = items.startMin;
    document.getElementById('end-min').value = items.endMin;
    document.getElementById('start').value = items.start;
    document.getElementById('end').value = items.end;
    document.getElementById('like').checked = items.likesColor;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
