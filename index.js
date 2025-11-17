"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiSimulator_1 = require("./apiSimulator");
(0, apiSimulator_1.fetchProductCatalog)()
    .then(function (data) {
    console.log(data);
})
    .catch(function (err) {
    console.log(err);
});
