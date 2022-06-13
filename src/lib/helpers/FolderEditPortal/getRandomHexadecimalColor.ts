export function getRandomHexadecimalColor() {
  function getRandomvalue(randomNumber) {
    if (randomNumber === 0 || randomNumber < 0.0625) return '0'
    if (randomNumber === 0.0625 || randomNumber < 0.125) return '1'
    if (randomNumber === 0.125 || randomNumber < 0.1875) return '2'
    if (randomNumber === 0.1875 || randomNumber < 0.25) return '3'
    if (randomNumber === 0.25 || randomNumber < 0.3125) return '4'
    if (randomNumber === 0.3125 || randomNumber < 0.375) return '5'
    if (randomNumber === 0.375 || randomNumber < 0.4375) return '6'
    if (randomNumber === 0.4375 || randomNumber < 0.5) return '7'
    if (randomNumber === 0.5 || randomNumber < 0.5625) return '8'
    if (randomNumber === 0.5625 || randomNumber < 0.625) return '9'
    if (randomNumber === 0.625 || randomNumber < 0.6875) return 'A'
    if (randomNumber === 0.6875 || randomNumber < 0.75) return 'B'
    if (randomNumber === 0.75 || randomNumber < 0.8125) return 'C'
    if (randomNumber === 0.8125 || randomNumber < 0.875) return 'D'
    if (randomNumber === 0.875 || randomNumber < 0.9375) return 'E'
    if (randomNumber === 0.9375 || randomNumber < 1) return 'F'
  }
  const valuesForColor = []
  for (let i = 0; i < 6; i++) {
    valuesForColor.push(getRandomvalue(Math.random()))
  }
  return `#${valuesForColor.join('')}`
}
