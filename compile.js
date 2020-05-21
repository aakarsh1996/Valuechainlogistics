const path = require('path');
const fs = require('fs');
const solc = require('solc');
const CourierPath = path.resolve(__dirname,'contracts','Transportation.sol');
const source = fs.readFileSync(CourierPath, 'utf8');
console.log(solc.compile(source,1));