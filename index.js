'use strict';

var debug      = require('debug')('smartstart:alexa');
var alexa      = require('alexa-app');
var SmartCrypt = require('smartcrypt');
var SmartStart = require('smartstart');

var app = new alexa.app('smartstart', 'smartstart');

var keys = process.env.SMARTCRYPT_KEYS.split(',');
var users = {};

/**
 * User class definition
 */
function User(userId) {
  this.userId = userId;
  this.crypt = new SmartCrypt(keys);
  this.car = null;
}

User.prototype.appId = function(auth) {
  try {
    var credentials = this.crypt.decrypt(auth);
    return credentials[2].toString();
  } catch (ex) {
    debug(ex);
  }

  return false;
};

User.prototype.authenticate = function(auth) {
  try {
    var credentials = this.crypt.decrypt(auth);

    this.car = new SmartStart({
      username: credentials[0],
      password: credentials[1]
    });

    return true;
  } catch (ex) {
    debug(ex);
  }

  return false;
};

/**
 * Alexa app functions
 */
app.error = function(exception, request, response) {
  debug(exception);
  response.say('Sorry, something bad happened.');
};

app.pre = function(request, response, type) {
  // Verify authentication data
  if (!request.data.query.auth) {
    return response.fail(null, 'Missing authentication data');
  }

  // Get user authentication data
  var auth = request.data.query.auth.replace(/\ /g, '+');
  var user = users[request.userId] || false;

  // Initalize user object
  if (!user) {
    debug('Initializing user');

    // Create new user object
    user = new User(request.userId);

    // Decrypt and assign
    if (!user.authenticate(auth)) {
      return response.fail(null, 'Not authorized');
    }

    users[request.userId] = user;
  }

  // Verify application ID
  if (user.appId(auth) !== request.applicationId) {
    debug('Invalid app ID:', user.appId(auth));
    return response.fail(null, 'Invalid application ID');
  }
};

app.post = function(request, response, type, exception) {
  if (exception) {
    users[request.userId] = false;

    if (undefined === exception.message) {
      exception = new Error(exception);
    }

    debug('%s', exception);

    var error = exception.message || exception;

    switch (error) {
      case '401 Unauthorized,WWW-Authenticate':
        error = 'Invalid username or password';
        break;
    }

    response.clear().say('An error occurred: ' + error).send();
  }
};

app.launch(function(request, response) {
  response.say('Welcome to the Viper SmartStart skill. Please say a command.').shouldEndSession(false);
});

// @todo Use sprintf() and arrays to build utterances
// @todo Randomize responses

app.dictionary = {
  cars: ['car', 'truck', 'vehicle']
};

app.intent('StartIntent', {
    slots: {},
    utterances: [
      "{start|turn on} the {cars}",
    ]
  },
  function(request, response) {
    debug('Sending start command');

    response.say('Ladies and gentlemen, start your engines');

    users[request.userId].car.start(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }
    });
  }
);

app.intent('StopIntent', {
    slots: {},
    utterances: [
      "{stop|turn off|shutdown} the {cars}",
    ]
  },
  function(request, response) {
    debug('Sending stop command');

    response.say('Shutting it down');

    users[request.userId].car.stop(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }
    });
  }
);

app.intent('UnlockIntent', {
    slots: {},
    utterances: [
      "{unlock|disarm} the {cars}",
    ]
  },
  function(request, response) {
    debug('Sending unlock command');

    response.say('I\'m on it');

    users[request.userId].car.disarm(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }
    });
  }
);

app.intent('LockIntent', {
    slots: {},
    utterances: [
      //"{lock|arm}",
      "{lock|arm|lock down} the {cars}",
    ]
  },
  function(request, response) {
    debug('Sending lock command');

    response.say('Securing your vehicle');

    users[request.userId].car.arm(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }
    });
  }
);

app.intent('SpeedIntent', {
    slots: {},
    utterances: [
      "how fast",
      "{fastest|top} speed",
      "what was the {fastest|top} speed",
    ]
  },
  function(request, response) {
    debug('Getting top speed');

    //response.say('Checking on that');

    users[request.userId].car.topSpeed(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }

      try {
        var speed = result.Return.Results.Device.FastestSpeed;

        speed = speed.replace('mph', 'miles per hour');
        speed = speed.replace('kph', 'kilometers per hour');

        response.say('Your top speed today was ' + speed).send();
      } catch (ex) {
        return response.fail(null, ex);
      }
    });

    return false;
  }
);

app.intent('LocateIntent', {
    slots: {},
    utterances: [
      "{where|locate|find}",
      "{where is|locate|find} the {cars}",
    ]
  },
  function(request, response) {
    debug('Locating vehicle');

    //response.say('Finding your vehicle');

    users[request.userId].car.locate(function(err, result) {
      if (err) {
        return response.fail(null, err);
      }

      try {
        var address = result.Return.Results.Device.Address.split('\t');

        if (!address.length) {
          return response.fail(null, 'Something went wrong when locating');
        }

        address.pop();
        address = address.join(', ');
        address = address.replace('Last Known: ', '');

        response.say('The last known location was, ' + address).send();
      } catch (ex) {
        return response.fail(null, ex);
      }
    });

    return false;
  }
);

app.intent('AMAZON.HelpIntent', {
    slots: {},
    utterances: []
  },
  function(request, response) {
    response.say('This is the Viper Smart Start skill. You can say something like, start my car, or, unlock my car. Now, how can I help you?').shouldEndSession(false);
  }
);

module.exports = app;
