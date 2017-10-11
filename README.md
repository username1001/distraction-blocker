# facebook-blocker

I find myself checking Facebook, almost impulsively, during the times I'm trying to be productive. 

So I created this extension which blocks me from doing that. It's simple: it sends an alert message, forever, blocking you from doing anything else other than clicking "ok", or "cancel". 

It does so via the manifest.json file, which waits for the match: facebook.com, then sends the alert message.

It serves as a reminder to continue working on things. And it also makes you mindful of the impulsive Facebook checking! :o 

Update: Making use of local storage, the alert will inform you how many times you tried accessing Facebook(note: this is a 'todo', and has not yet been added).
