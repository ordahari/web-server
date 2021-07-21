const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=3fc6af5593d9d545791cb758b0fe2eac&query=' + latitude + ',' + longitude + '&units=m';
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service !', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        }
        else {

            callback(undefined,body.current.weather_descriptions[0]+', it is currently '+body.current.temperature+' degrees out, feels like '+body.current.feelslike+' degrees.')
            // callback(undefined, {
            //     weather_descriptions: body.current.weather_descriptions[0],
            //     temperature: body.current.temperature,
            //     feelslike: body.current.feelslike
            // })
        }
    })
}

module.exports = forecast;