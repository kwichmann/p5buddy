document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

// Set up buddy page as div
const buddy = document.createElement('div');
document.body.appendChild(buddy);
buddy.id = 'buddy';

// Insert HTML in buddy
fetch(chrome.extension.getURL('buddy.html'))
  .then(response => response.text())
  .then((data) => {
    buddy.innerHTML = data;

    // Clipboard png
    const clipboard = document.getElementById('clipboard');
    clipboard.src = chrome.extension.getURL('clipboard.png');

    // Make player
    const player = new Plyr('#player', {});
    window.player = player;

    setTimeout(() => {
      console.log(player.ready);
    }, 15000); 

    
  });

const codeDiv = document.getElementById('code');
const commentDiv = document.getElementById('comment');
const linkDiv = document.getElementById('link');

// Storage
const storage = chrome.storage.sync;

// Functions to be triggered by background requests
const buddyApp = {
  toggleShow: function (request, send, sendResponse) {
    buddy.classList.toggle('show');
  },
  togglePosition: function (request, send, sendResponse) {
    buddy.classList.toggle('down');
  }
}

// Listen for background requests
chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
  buddyApp[request.action](request, send, sendResponse);
});
