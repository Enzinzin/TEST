const userInfo = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi mon nom est ${userInfo.name} et  ${userInfo.age} ans et je suis à ${userInfo.campus}`,
    e: "oO",
    T: "U "
}))
