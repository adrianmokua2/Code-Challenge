// This is used to prompt the user to input speed and also show speed and license status.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateSpeedStatus = require('./detector');

function promptForSpeed() {
  rl.question("Enter the speed of the car (in km/h): ", (speed) => {
    const speedStatus = calculateSpeedStatus(parseFloat(speed));
    console.log(speedStatus);
    rl.close();
  });
}

promptForSpeed();