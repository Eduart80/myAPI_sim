
interface orderType{
    id: number;
    items: string;
    total: number;
}
interface orderSaleType{
    orderId:number;
    id:number;
    unitSale:number;
    price:number;
}

const orderDetailsDB: orderType[] = [
    { id: 1, items: 'Book', total: 250 },
    { id: 2, items: 'Laptop', total: 1200 },
    { id: 3, items: 'Pen', total: 200 }
];

const orderSaleDB: orderSaleType[] = [
     { orderId:0, id: 1, unitSale: 2, price: 24.99 },
     { orderId:1, id: 2, unitSale: 12, price: 1199.99 },
     { orderId:2, id: 3, unitSale: 23, price: 83.99 }
];

export const fetchProductCatalog = (): Promise<orderType[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderDetailsDB) resolve(orderDetailsDB);
            else reject("Failed to fetch product catalog");
        }, 1000);
    });
}

// Resolve the Promise with an array of reviews after a 1.5-second delay.
// Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".
export const fetchProductReviews = (productId: number): Promise<orderType[]> =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < orderDetailsDB.length; i++) {
                if (productId === orderDetailsDB[i].id) {
                    const found = orderDetailsDB[i];
                    resolve([{ id: found.id, items: found.items, total: found.total }]);
                    return;
                }
            }
            reject(`Failed to fetch reviews for product ID ${productId}`);
        }, 1500);
    });
}

// : Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
// Resolve the Promise with a mock sales report after a 1-second delay.
// Reject randomly with an error message, e.g., "Failed to fetch sales report".
export const fetchSalesReport = (itemName:string): Promise<orderSaleType[]>=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             for (let i = 0; i < orderDetailsDB.length; i++) {
                if (itemName === orderDetailsDB[i].items) {
                    const found = orderSaleDB.find(order => order.id === orderDetailsDB[i].id)
                   if (found) {
                        resolve([found]);
                    } else {
                        reject('Product not found');
                    }
                    // resolve([{ orderId: found.orderId, id: found?.id, unitSale: found?.unitSale, price: found?.price },]);
                    return;
                }
            }
            reject(`Failed to fetch reviews for product ID ${itemName}`);
        },1000)
    })
}