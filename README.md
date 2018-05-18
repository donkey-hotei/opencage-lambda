# opencage-lambda

An ES6-enabled AWS Lambda function that can reverse and forward geocode
lat/lon coordinates and addresses via the OpenCage API.

### Usage

First, clone this repository:
```
git clone https://github.com/donkey-hotei/opencage-lambda
```

With the webpack CLI installed, create a build:
```
npx webpack --mode=development
```

You should change the the `mode` to `production` before placing in AWS Lambda.
This build will create two lambda functions:
```
dist
├── forward.js
└── reverse.js
```

You can then copy-and-paste either of the builds there to inside of AWS Lambda.

Enjoy!

