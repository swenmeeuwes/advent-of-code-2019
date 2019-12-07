const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const masses = input.split("\r\n").map(l => Number(l));

const totalFuelNeeded = masses.reduce((acc, curr) => {
  const fuelNeededForComponent = Math.floor(curr / 3) - 2;
  return acc + fuelNeededForComponent;
}, 0);

console.log(`Total fuel needed: ${totalFuelNeeded}`);