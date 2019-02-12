console.log("Background running");

// Listen for icon clicks
chrome.browserAction.onClicked.addListener(tab => {
    const msg = {
        "action": "toggleShow"
    }
    chrome.tabs.sendMessage(tab.id, msg);
});

// Listen for shortcut commands
chrome.commands.onCommand.addListener(command => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        console.log(command);
        const msg = {
            "action": command
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    });
});
