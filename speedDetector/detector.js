// This function is used to calculate points garnered by thr driver
function calculateSpeedStatus(speed) {
    if (speed < 70) {
      return "OK";
    } else {
      const demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints >= 12) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  
  module.exports = calculateSpeedStatus;