"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
var orderDetailsDB = [
    { id: 1, items: 'Book', total: 250 },
    { id: 2, items: 'Laptop', total: 1200 },
    { id: 3, items: 'Pen', total: 200 }
];
var orderSaleDB = [
    { orderId: 0, id: 1, unitSale: 2, price: 24.99 },
    { orderId: 1, id: 2, unitSale: 12, price: 1199.99 },
    { orderId: 2, id: 3, unitSale: 23, price: 83.99 }
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
// : Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
// Resolve the Promise with a mock sales report after a 1-second delay.
// Reject randomly with an error message, e.g., "Failed to fetch sales report".
var fetchSalesReport = function (itemName) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var _loop_1 = function (i) {
                if (itemName === orderDetailsDB[i].items) {
                    var found = orderSaleDB.find(function (order) { return order.id === orderDetailsDB[i].id; });
                    if (found) {
                        resolve([found]);
                    }
                    else {
                        reject('Product not found');
                    }
                    return { value: void 0 };
                }
            };
            for (var i = 0; i < orderDetailsDB.length; i++) {
                var state_1 = _loop_1(i);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            reject("Failed to fetch reviews for product ID ".concat(itemName));
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
