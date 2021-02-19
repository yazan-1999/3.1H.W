
let { menu, printMenu,printMessege,print} = require('./food')


function mainLoad() {
  printMenu(menu, (option) => {

    if (option != "") {
      //object  methods https://www.youtube.com/watch?v=VmicKaGcs5g
      let jsonObj = menu[option - 1]
      // sou sou methos
      // Array.from(Object.keys(jsonObj)).forEach(function(key){
      //   console.log(jsonObj[key]);
      // });
      // console.log(menu[option - 1])
      let namE = Object.entries(jsonObj)
      console.log(`You\`re chose ${namE[1][1]}!!!!!`)
      setTimeout(mainLoad, 500)
    }
    else {
      console.log("Bay!!!")
      process.exit(-1);

    }
  })
}

// menu.forEach(item => console.log(item.print()))
mainLoad()
// console.log(menu[0])