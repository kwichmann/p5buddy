// Set up buddy page as div
const buddy = document.createElement('div');
document.body.appendChild(buddy);
buddy.id = 'buddy';

// Insert HTML in buddy
fetch(chrome.extension.getURL('buddy.html'))
  .then(response => response.text())
  .then((data) => {
    buddy.innerHTML = data;

  const player = new Plyr('#player');

  const video = document.getElementById('video');
  video.src = "https://www.youtube.com/embed/Jm4HgJbUmlw?origin=https://plyr.io&amp;enablejsapi=1";
  video["data-plyr-config"] = '{ "title": "This is an example video", "volume": 1, "debug": true, "ratio": "3:4" }'
});

const info = document.getElementById('info');
// info.innerHTML = "<div id='code'></div><div id='comment'></div><div id='link'></div>"

const codeDiv = document.getElementById('code');
// codeDiv.innerHTML = "<h5>Code</h5><textarea readonly>";

const commentDiv = document.getElementById('comment');
// commentDiv.innerHTML = "<h5>Comment</h5><p>Test</p>";

const linkDiv = document.getElementById('link');
// linkDiv.innerHTML = "<h5>Link</h5><a href='#'>Test</a>";

// const buddyFrame = document.createElement('iframe');
// buddy.appendChild(buddyFrame);
// buddyFrame.src = chrome.runtime.getURL('buddy.html');
// buddyFrame.id = 'buddyFrame';


// let player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '100%',
//     width: '50%',
//     host: 'https://www.youtube.com',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }




// Storage
const storage = chrome.storage.sync;

// Functions to be triggered by background requests
const buddyApp = {
    toggleShow: function(request, send, sendResponse) {
        buddy.classList.toggle('show');
    },
    togglePosition: function(request, send, sendResponse) {
        buddy.classList.toggle('down');
    }
}

// Listen for background requests
chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
    buddyApp[request.action](request, send, sendResponse);
});
