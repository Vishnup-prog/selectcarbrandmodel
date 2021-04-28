# selectcarbrandmodel

1. Created this file in local notepad to html with javascript Jquery framework
2. Open in google chrome, it is responsive for all devices
3. Before its load the Index.html file, Please follwo the few setps to access https://www.huk24.de/ api call. Because, Google chrome has proxy security by default. 
(So without following my steps, chrome will block you to get the data from api link)


The steps are..

1. Open Run from start bar or click window key + r - It will open run box 
2. Copy & paste this line chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security  - This will open new google chrome window with disable web security.
3. Then, try to load that local Index.html file in that browser, -  Now, you can see the web application running successfully there.

Explanation about my coding ..

1. I used Jquery framework so, I used this cdn library https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js  to access jquery codes.
2. I used Ajax call to get all brand list on Load page whihc is on document.ready function 
3. Then, model list also form depends on brand selection which is from api AJAX call get and in the format of JSON  string list.
3. I used Boostrap plugin or library for css responsive for all devices.
4. This is the boostrap cdn I used, - https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js


Validation :

-  if brand name is empty/ unselected, user will get the error message for brand name unselection.
-  if brand name is selectled incorrectly, user will get the error message to select the brand name correctly.
-  if model name is empty/ unselected, user will get the error message for model name unselection. 
- if brand name and model name selected together, user will see the result message with brand name and model name.


Note** We can also save and call this boostrap.css file and Jquery.Js script file locally, Right Now, I am calling Index.html file from local desktop, So I used cdn link to load.  
 
 

