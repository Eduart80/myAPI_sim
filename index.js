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
(0, apiSimulator_1.fetchProductReviews)(2)
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.log(err);
});
// get sale by id
(0, apiSimulator_1.fetchSalesReport)('Book')
    .then(function (res) {
    res.map(function (res) {
        console.log("Book sold: ".concat(res.unitSale, ", with a price of ").concat(res.price));
    });
})
    .catch(function (err) {
    console.log(err);
});
