var auth = { 
    clientId: "xtf13fCaEfd5YZdqkQaTPA", 
    apiKey: "aPZGg2PjfUOmvrqGB-6y-FCO11Et4w0_04R7_XZm-LTkwmClkSebFC4-dmSaExcw4EyyoD05iU2yWTtfj8YS30k-2bq_ncc1yuVzPinhX5Sm8AfhJFanOTmdowpgWnYx",
    clientSecret: "3EbQxNbJvqFGpqKosuIZtLSTbxr9Vg5BetCGgwMa3WgfLc21snc0M0yXMxVxFVJw",
    
  };

  var terms = '';
  var near = 'saltLakeCity';

  var accessor = {
    consumerSecret: auth.clientSecret,
  };

  var parameters = [];
  parameters.push(['term', terms]);
  parameters.push(['location', near]);
  parameters.push(['oauth_client_id', auth.clientId]);
  parameters.push(['oauth_api_key', auth.apiKey]);
  parameters.push(['oauth_client_secret', auth.clientSecret]);

  var message = { 
    'action': 'http://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters 
  };

  OAuth.setTimestampAndNonce(message);  

  OAuth.SignatureMethod.sign(message, accessor);

  var parameterMap = OAuth.getParameterMap(message.parameters);
  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

  var url = OAuth.addToURL(message.action,parameterMap);
  var response = UrlFetchApp.fetch(url).getContentText();
  var responseObject = Utilities.jsonParse(response);
  //have my JSON object, do whatever we want here, like add to spreadsheets