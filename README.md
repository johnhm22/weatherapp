# weatherapp  
This is a small app that allows the user to search for the weather in a city of their choice.  

## What the app does
The functionality is quite straight forward; the home screen shows an input field into which the user types a city name, such as London or San Diego.  
There are then two options; see the current temperature or select the five-day temperature forecast.  
In each screen, the user can return to the home page to choose another location.  
The five-day forecast shows the actual, max, and minimum temperatures forecast for the city plus a summary for the five days; maximum, minimum and average.

## Why build the app?  
It was an exercise to test coding skills including the ability to connect to an api and manipulate data.

## Tech stack/framework  
The technology used is:
* JavaScript
* Express
* Nunjucks as a templating engine for JavaScript
* HTML
* Bootstrap 4

## API reference  
The api used can be found at https://openweathermap.org/api , specifically the apis for the current weather and five-day forecast were used  

## Tests  
Tests have not yet been added

### How to use  
Create a folder on your own computer, ensuring it's not already a git repository. There is a green button at the top right of this repository called 'Code' which you gives you the option to clone, download a zip file, or open with GitHub desktop. Choosing 'clone', fetches everything and puts it in your folder.  
If you want to clone, copy the link and then run this command:  
'git clone  https://github.com/johnhm22/weatherapp.git'.  
You do, of course, have to create your own .env file to contain the secret key required by express session and the API key, which you get from the API provider. A .env.example file is provided to show you what needs to be done.

### Installing dependencies
In the console, run 'npm init' in the root directory.

### Starting the server and running tests
This I did by running 'nodemon server.js' in the /dist directory which contains all the js files.  

### To do list and problems encountered  
* Although a css file was created, for some reason, the html simply wouldn't pick it up. In the end, the styles were inserted inline.  
* More details about the weather needs to be added; currently it is really a temperature rather than weather app.  
* Background photos are shown to add more interest to the pages. They have no relationship to the weather in the location. It would be interesting to link locations with, for example, snow with a photo of snow!  Also, the same photos are shown for each html page; a greater selection would be nice

### Credits
Thanks to:  
https://getbootstrap.com/  
https://unsplash.com/  
Plus the other providers of libraries installed from npm.
