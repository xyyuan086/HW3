var fetch = require('node-fetch');

var url = 'https://api-v3.mbta.com/vehicles?api_key=77d03edfadfd488fb775e572b679bdfd&filter[route]=1&include=trip';

var data = function(){
    fetch(url)
    .then(function(response){return response.json();})
    .then(function(json){console.log(json);})

};

setInterval(data, 15000);
