//address of native addon
const {
  add,
} = require("./Nodejs-Napi-Addon-Using-Cmake/build/Release/addon.node");

//calling functions of native addon
var result = add(3, 4);

//console.log(result);

//commnicating with main process of app
postMessage(result);
