# delete-unread-emails-gmail
Delete unread emails from gmail

## Specify the total no of emails you need to delete
1. totalEmailDeleteCount -> this value is static for now. Watch out for total unread emails to update this number.
2. There is no API for deleting emails hence the browser console is used to delete the emails.
3. need to hit this function first deleteEmails in the console.
4. And then update the count = 0; to keep track of total emails deleted so far
5. Set out the total emails you want to delete totalEmailDeleteCount = 100;
6. Then finally run this function var interval = setInterval(deleteEmails, 10000);
