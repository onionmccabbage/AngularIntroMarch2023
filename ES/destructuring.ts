const values = [1, 3, 6, 11, 215, 21, 66, 42]
// destructure                  ... 'elipsis'
const [zeroeth, first, , third, ...rest] = values

console.log(zeroeth, first, third, rest)

const squares = [1, 4, 9, 16, 25]
const powers  = [2, 4, 8, 16, 32]
const words = 'coffee'
// spread
const both    = [...squares, ...powers, ...words]
console.log(both)