const os = require ("os")
const path = require("path")
//const math = require("./math") or
const {add, sub, mul, div} = require("./math")


// node js miss some of js APIs like fetch

console.log(add(4,5))
console.log(sub(4,5))
console.log(mul(4,5))
console.log(div(4,5))

/*console.log(os.type())
console.log(os.version())
console.log(os.homedir())

//console.log(__dirname)
//console.log(__filename)

//console.log(path.dirname(__filename))
//console.log(path.basename(__filename))
//console.log(path.extname(__filename))
console.log(path.parse(__filename))
/* This is what we ge an object {
  root: 'C:\\',
  dir: 'C:\\Users\\zippy\\Desktop\\01TUT',
  base: 'server.js',
  ext: '.js',
  name: 'server'
}
*/