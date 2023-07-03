# delete-unread-emails-gmail
Delete unread emails from gmail

## Specify the total no of emails you need to delete
1. There is no API for deleting emails hence the browser console is used to delete the emails.
2. Open the browser console and hit the deleteEmails function only.
3. Then update the below variables as mentioned below.
4. Update the count = 0; to keep track of the total emails deleted so far
5. Set out the total emails you want to delete totalEmailDeleteCount = 100;
6. Then finally run this function var interval = setInterval(deleteEmails, 10000);

```
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

```
