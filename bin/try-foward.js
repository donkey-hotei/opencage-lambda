var forwardModule = require('../dist/forward.js');

var mockLambdaContext = {
    succeed: function succeed(results) {
        console.log(results);
        process.exit(0);
    },

    fail: function fail(error) {
        console.log(error);
        process.exit(0);
    }
};

var address = 'Silauri, Ozurgeti Municipality, Georgia';
forwardModule.forward(address, mockLambdaContext);
