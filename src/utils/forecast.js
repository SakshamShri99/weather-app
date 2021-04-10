const request = require('request');

const forecast = (lattitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=ec9e71a68df66978679bc3e9a69299d3&query=${lattitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services :(', undefined);
    } else if (body.error) {
      callback('Unable to find location :(', undefined);
    } else {
      const fc = `${body.current.weather_descriptions[0]}. It is ${body.current.temperature} here but it feels like ${body.current.feelslike}. Chances of rain are ${body.current.precip}`;
      callback(undefined, fc);
    }
  });
};

module.exports = forecast;
