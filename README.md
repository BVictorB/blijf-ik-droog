# Blijf ik droog?

As the name of this course implies, this course is about building a web app from scratch. The name of this project is 'Blijf ik droog?' ('Will i stay dry?'), I wanted to create a very simple web application that calculates if you stay dry when walking/cycling from your current location. This is something that I would use myself since I always check the Buienradar.nl graph to check if I will get home/to my desired location dry. The thing is that this takes effort since you have to look at a graph and calculate the timing yourself. This project gives you the time of departure itself so you don't have to worry about the rain. It makes a very simple task easy as pie.

## API's

For this project I use three different API's:

- [OpenWeatherMap API](https://openweathermap.org/api):  
This is the most important one for this project. I use this API to get the current weather data using geographic coordinates, this returns an array of the weather data for each minute of the coming hour. The API makes it really easy to make a request, you just need the latitude and longitude of the location where you want to request the current weather data from. 

- [OpenCage Geocoder API](https://opencagedata.com/):
I use this API to do some forward- and reverse geocoding. This is useful for getting the placename of a geolocation when I only have the coordinates, or for getting the coordinates of a city, country or any different location that someone wants to request the weatherdata from. This API is very 'forgiving', if you make any spelling mistakes or type the location name in a different language, it will still find the correct location most of the time.

- [REST Countries API](https://restcountries.eu/):
This API is only used to get a list of all countries in Europe with their flags and capitals. It can do a lot more, but I did not really need any of the other features for this project. This API is very user friendly and does not even require an API key to use it, this is awesome because it won't limit anyone in any way (except for rate limiting when you are being crazy with it).

## Actor Diagram

![](https://user-images.githubusercontent.com/10921830/109519044-285b4b00-7aab-11eb-8471-f55a71d9fa2c.png)

## Interaction Diagram

![](https://user-images.githubusercontent.com/10921830/109535340-bdb30b00-7abc-11eb-94f9-82bc2f5b19e3.png)

## Process

I started creating the logic for calculating the 'dry minutes' and departure time for the user using the OpenWeatherMap API. After I got this working I created an input where you can just type in any location (city, country, village, etc..), this also gets you the same output as using the coordinates, but has better interaction since you don't have to look up the coordinates of your location. After this I also added a button that gets your current geolocation, this improves the interaction even further since you dont have to type in anything to get the correct location. 
After I got all of this working, I started working on client-side routing. I did this from scratch. I never did this before, but it was so much easier than I expected. I improved my project/folder structuring quite some times, added views and modules, and basically removed all HTML to render every single thing with JavaScript.

## Installation

- Clone this repo
```
git clone https://github.com/BVictorB/blijf-ik-droog.git .
```
- Install all NPM packages
```
npm i
```
- Execute this command to build the project using the Parcel application bundler and to start the local server running this build (http://localhost:1234).
```
parcel src/index.html
```
