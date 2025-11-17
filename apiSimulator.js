"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
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
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
// Resolve the Promise with an array of reviews after a 1.5-second delay.
// Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
var fetchProductReviews = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            for (var i = 0; i < orderDetailsDB.length; i++) {
                if (productId === orderDetailsDB[i].id) {
                    var found = orderDetailsDB[i];
                    resolve([{ id: found.id, items: found.items, total: found.total }]);
                    return;
                }
            }
            reject("Failed to fetch reviews for product ID ".concat(productId));
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
