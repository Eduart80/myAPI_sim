"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiSimulator_1 = require("./apiSimulator");
// get all
(0, apiSimulator_1.fetchProductCatalog)()
    .then(function (data) {
    console.log(data);
})
    .catch(function (err) {
    console.log(err);
});
// get by id
(0, apiSimulator_1.fetchProductReviews)(22)
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.log(err);
});
