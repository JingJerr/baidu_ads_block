$(function () {
    clean_ads();
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
           clean_ads();
        });
});
function clean_ads() {
    $ads = $("span:contains('广告')");
    $ads.parent().parent().css("display", "none");
    $ads.parent().parent().parent().parent("div:has(id)").css("display", "none");
}