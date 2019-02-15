// Set up buddy page as iframe within a div
const buddy = document.createElement('div');
document.body.appendChild(buddy);
buddy.id = 'buddy';

const buddyFrame = document.createElement('iframe');
buddy.appendChild(buddyFrame);
buddyFrame.src = chrome.runtime.getURL('buddy.html');
buddyFrame.id = 'buddyFrame';

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
