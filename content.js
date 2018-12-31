// Show buddy?
let show = false;

// Large buddy?
let largeBuddy = false;

// Set up buddy div
const div = document.createElement('div');
document.body.appendChild(div);
div.id = 'buddy';

// Set up buddy video
const vid = document.createElement('iframe');
div.appendChild(vid);
vid.id = "buddyVid";

// Dan :D
vid.src = "https://www.youtube.com/embed/riiJTF5-N7c";

// Storage
const storage = chrome.storage.sync;

// Functions to be triggered by background requests
const buddyApp = {
    buddyIn: function(request, send, sendResponse) {
        if (largeBuddy) {
            div.style.left = "60%";    
        } else {
            div.style.left = "80%";
        }
    },
    buddyOut: function(request, send, sendResponse) {
        div.style.left = "101%";
    },
    toggleOnOff: function(request, send, sendResponse) {
        show = !show;
        if (show) {
            this.buddyIn(request, send, sendResponse);
        } else {
            this.buddyOut(request, send, sendResponse);
        }
    },
    buddySmall: function(request, send, sendResponse) {
        div.style.left = "80%";
        div.style.top = "60%";
        div.style.height = "39%";
        div.style.width = "19%";
        
        vid.style.height = "50%";

        show = true;
    },
    buddyLarge: function(request, send, sendResponse) {
        div.style.left = "60%";
        div.style.top = "40%";
        div.style.height = "59%";
        div.style.width = "39%";

        vid.style.height = "65%";

        show = true;
    },
    toggleLarge: function(request, send, sendResponse) {
        largeBuddy = !largeBuddy;
        if (largeBuddy) {
            this.buddyLarge(request, send, sendResponse);
        } else {
            this.buddySmall(request, send, sendResponse);
        }
    }
}

// Listen for background requests
chrome.runtime.onMessage.addListener((request, send, sendResponse) => {
    buddyApp[request.action](request, send, sendResponse);
});
