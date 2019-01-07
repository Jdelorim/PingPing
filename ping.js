require('dotenv').config();
const http = require("http");
let checked = 0;
let startApp = new Date(Date.now());


setInterval(function() {
    console.log("checking sites");
    checked++;
    http.get(process.env.WEB1);
    http.get(process.env.WEB2);
    http.get(process.env.WEB3);
    http.get(process.env.WEB4);
    http.get(process.env.WEB5);
    http.get(process.env.WEB6);
    console.log("done checking");
    console.log(`since running on ${startApp}, it's been ${checked} times`);
}, 30 * 1000);