var deleteEmails = function() {
    var unreadEmailList = document.querySelectorAll('.zA.zE');
    unreadEmailList.forEach(function (emailItem) {
        var isItemImportantTag = emailItem.querySelector('[data-is-important="true"]')
        if (!isItemImportantTag) {
            emailItem.querySelector('[data-tooltip="Delete"]').click();
            count++;
        }
    });
    console.log("Email deleted count is ", count);
    if (count > totalEmailDeleteCount) {
        console.log("Total email deletion limit breached");
        clearInterval(interval);
    }
}
var count = 0;
var totalEmailDeleteCount = 100;
var interval = setInterval(deleteEmails, 10000);

// let clickEvent = new MouseEvent("click", {
//     bubbles: true,
//     cancelable: true,
//     clientX: 200,
//     clientY: 900
//   });
// document.querySelectorAll('.zA.zE')[0].querySelector('[data-tooltip="Delete"]').click()
// deleteButton = document.querySelector('[data-tooltip="Delete"] .asa')
// deleteButton.dispatchEvent(clickEvent)

// k = document.querySelectorAll('.zA.zE')[0];
// k.querySelector('[data-tooltip="Select"]').click()
