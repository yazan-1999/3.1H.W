const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

module.exports.printMenu = (menu,cb) => {
  menu.forEach(item => console.log(item.print()))
  
  rl.question("Choose >>", (option) => {
    cb(option)
  })
}
module.exports.printMessege = (messege) => {
 console.log(`${messege} >>`)
}