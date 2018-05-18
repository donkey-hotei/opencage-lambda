var reverseModule = require('../dist/reverse.js');

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

reverseModule.reverse({lat: 42, lon: 42}, mockLambdaContext);
