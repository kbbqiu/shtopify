
function removeBuy() {
  console.log('i am removeBuy')
  var oneClickButtons = document.querySelectorAll(".a-button-oneclick, .a-button-preorder, #buyButton, .a-button-stack");
  for (var i = 0; i < oneClickButtons.length; i++) {
    oneClickButtons[i].style.display = "none";
  }
}

chrome.storage.sync.get(['startTime', 'endTime', 'disappear'], function(item) {
  var intervals = 0;
  let storage = item;
  const time =  new Date();
  console.log(storage);
  if (storage.disappear === 'true') {

    if(time.getHours() >= Number(storage.startTime) || time.getsHours() <= Number(storage.endTime)) {
      removeBuy();
      removeBuy();
      removeBuy();
      removeBuy();
      removeBuy();
      var buttonChecker = window.setInterval(function () {
        intervals++;
        // Check for one click buttons on page and hide them
        removeBuy();
        // Just stop after a while
        if (intervals > 5) {
          window.clearInterval(buttonChecker);
        }
      }, 500);
    }
  }
});
