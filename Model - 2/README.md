# selectbrandmodelJquerymvc

Build this project with Jquery in Mvc from visual studio 2015


This project has 3 sections:

1. Get view html file Model -2 -> Javascript Project -> View -> Index.cshtml
2. Get script file Model -2 -> Javascript Project -> Scripts -> Indexjs.js
3. Get controller Model -2 -> Javascript Project -> Controllers -> HomeController.cs

 
Note** Jquery plugin and boostrap plugin are installed  from Nugets
Note** I used Api call in home controller , so that nobody can see the api link from front end , then its more secured 

Process of Index.cshtml : 

1.  Brand list dropdown and model list dropdown 
2. Error message and result will display for front end

Process of Indexjs.js : 

1. Call home controller  to get the brand list for dropdown on load the page, using Ajax GET call 
2. Depends on selection of brand name, ajax call will send with parameter to home controller to api and returns a model list
3. Model list dropdown is created in script file depends on changes of brand name.
4. Used Jquery plugin version is jquery.1.10.2.js

Validation :

-  if brand name is empty/ unselected, user will get the error message for brand name unselection.
-  if brand name is selectled incorrectly, user will get the error message to select the brand name correctly.
-  if model name is empty/ unselected, user will get the error message for model name unselection. 
- if brand name and model name selected together, user will see the result message with brand name and model name.

Process of Homecontroller.cs : 

1. ActionResult Index() funtion -  load the index.cshtml view and call the brand list api and send list by Viewbag to html which is on loading the page.
2. [HttpGet] JsonResult funtion callModel() - This funtion is called when brand name is selected from frond end. This is called by AJAX GET with parameter of brand name, 
    This function will return model list for dropdown from model list api.
	
	-- Please load this project from visual studio 2015 or visual studio 2019--
