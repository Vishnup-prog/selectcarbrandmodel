# selectbrandmodelAngularmvc

Build this project with Angualr in Mvc from visual studio 2015


This project has 2 sections:

1. Get view html file Model -2 -> angular project -> View -> Index.cshtml (whihc contains script inside)
3. Get controller Model -2 -> angular project -> Controllers -> HomeController.cs

 
Note** Angular.js plugin and boostrap plugin are installed  from Nugets
Note** I used Api call in home controller , so that nobody can see the api link from front end , then its more secured 

Process of Index.cshtml : 

1.  Brand list dropdown and model list dropdown 
2.  Error message and result will display for front end
3.  Call home controller JsonResult funtion to get the brand list for dropdown on load the page, using Ajax GET call 
2.  Depends on selection of brand name, ajax call will send with parameter to home controller to api and returns a model list
3.  Model list dropdown is created in script file depends on changes of brand name.
4.  I used angular.js plugin

Validation :

-  if brand name is empty/ unselected, user will get the error message for brand name unselection.
-  if brand name is selectled incorrectly, user will get the error message to select the brand name correctly.
-  if model name is empty/ unselected, user will get the error message for model name unselection. 
-  if brand name and model name selected together, user will see the result message with brand name and model name.

Process of Homecontroller.cs : 

1. ActionResult Index() funtion - load the index.cshtml view 
2. [HttpGet] JsonResult funtion callbrand() - call the brand list api AJAX GET and returns with Json result.
2. [HttpGet] JsonResult funtion callModel() - This funtion is called when brand name is selected from frond end. This is called by AJAX GET with parameter of brand name, 
    This function will return model list for dropdown from model list api.
	
	-- Please load this project from visual studio 2015 or visual studio 2019--