# Blijf ik droog?

About this project/concept...

## API's

For this project I use three different API's:

- [OpenWeatherMap API](https://openweathermap.org/api):  
This is the most important one for this project. I use this API to get the current weather data using geographic coordinates, this returns an array of the weather data for each minute of the coming hour. The API makes it really easy to make a request, you just need the latitude and longitude of the location where you want to request the current weather data from. 

- [OpenCage Geocoder API](https://opencagedata.com/):
I use this API to do some forward- and reverse geocoding. This is useful for getting the placename of a geolocation when I only have the coordinates, or for getting the coordinates of a city, country or any different location that someone wants to request the weatherdata from. This API is very 'forgiving', if you make any spelling mistakes or type the location name in a different language, it will still find the correct location most of the time.

- [REST Countries API](https://restcountries.eu/):
This API is only used to get a list of all countries in Europe with their flags and capitals. It can do a lot more, but I did not really need any of the other features for this project. This API is very user friendly and does not even require an API key to use it, this is awesome because it won't limit anyone in any way (except for rate limiting when you are being crazy with it).

## Actor Diagram

...

## Interaction Diagram

...

## Process

...

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
