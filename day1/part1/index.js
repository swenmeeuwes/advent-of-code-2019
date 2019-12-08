const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const inputMasses = input.split("\r\n").map(l => Number(l));

const computeFuelNeeded = (masses) => {
  return masses.reduce((acc, curr) => {
    const fuelNeededForComponent = Math.floor(curr / 3) - 2;
    return acc + Math.max(0, fuelNeededForComponent);
  }, 0);
}

const totalFuelNeeded = computeFuelNeeded(inputMasses);

console.log(`Total fuel needed: ${totalFuelNeeded}`);

exports.computeFuelNeeded = computeFuelNeeded;