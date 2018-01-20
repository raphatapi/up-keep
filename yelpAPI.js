var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=40.82783908257346&longitude=-74.10162448883057",
    "method": "GET",
    "headers": {
      "authorization": "Bearer aPZGg2PjfUOmvrqGB-6y-FCO11Et4w0_04R7_XZm-LTkwmClkSebFC4-dmSaExcw4EyyoD05iU2yWTtfj8YS30k-2bq_ncc1yuVzPinhX5Sm8AfhJFanOTmdowpgWnYx",
      "cache-control": "no-cache",
    }
  }
  
  
  $.ajax(settings).done(function (response) {
    console.log(response);



fetch('https://api.yelp.com/oauth2/token?client_id=<CLIENT_ID>&client_secret=<CLIENT_SECRET>', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({
    grant_type: 'client_credentials',
  })
})
  .then((res) => res.json())
  .then((resJSON) => {
    this.setState({ access_token: resJSON.access_token });
    console.log(resJSON)
  })
  .then(() => {
    fetch('https://api.yelp.com/v3/businesses/search?location=12345', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + this.state.access_token
      }
    })
    .then((res) => res.json())
    .then((resJSON) => {
      console.log('resJSON', resJSON)
    })
  })
  .catch((err) => {
    console.log('err', err);
  })
