/*
 * Script for running a specified AWS Lambda function at the command-line.
 * Creates a mock context to inject into the lambda function, for testing.
 */
const argv = process.argv;
const name = argv[2].split('.')
const library = require(`../dist/${name[0]}.js`);
const lambda = library[name[1]];
const options = JSON.parse(argv[3]);

function succeed(result) {
    console.log(result);
    process.exit(0);
}

function fail(error) {
    console.error(error);
    process.exit(1);
}

const mockContext = {
    succeed: succeed,
    fail: fail,
    done: (err, res) => err ? fail(err) : succeed(res),
    getRemainingTimeInMillis: () => Infinity,
    functionName: "fakeLambda",
    functionVersion: "0",
    invokedFunctionArn: "arn:aws:lambda:fake-region:fake-acc:function:fakeLambda",
    memoryLimitInMB: Infinity,
    awsRequestId: "fakeRequest",
    logGroupName: "fakeGroup",
    logStreamName: "fakeStream",
    identity: null,
    clientContext: null
};

lambda(options, mockContext);

