"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductCatalog = void 0;
var orderDetailsDB = [
    { id: 1, items: 'Book', total: 25 },
    { id: 2, items: 'Laptop', total: 1200 },
    { id: 3, items: 'Pen', total: 84 }
];
var fetchProductCatalog = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (orderDetailsDB)
                resolve(orderDetailsDB);
            else
                reject("Failed to fetch product catalog");
        }, 5000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
// fetchProductCatalog()
//     .then((res) => {
//         console.log(res)
//     });
