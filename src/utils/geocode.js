const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic29ua2FrYXJvdCIsImEiOiJja25hZDZ4dDUxZzd0MnVueHFoMXU2c3VzIn0.VQm-c2rk0I68QWrt0irSqw`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to locations services :(', undefined);
    } else if (body.message || !body.features[0]) {
      callback('Unable to find location :(', undefined);
    } else {
      callback(undefined, {
        lattitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
