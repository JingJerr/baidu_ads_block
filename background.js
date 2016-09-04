var requestFilter = {
    "urls": ["*://*.baidu.com/*"],
    "types": ["xmlhttprequest"]
};
chrome.webRequest.onCompleted.addListener(
    function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function () {
            });
        });
    }, requestFilter);