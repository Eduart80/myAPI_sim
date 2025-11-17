
interface orderType{
    id: number;
    items: string;
    total: number;
}

const orderDetailsDB: orderType[] = [
     { id: 1, items: 'Book', total: 25 },
     { id: 2, items: 'Laptop', total: 1200 },
     { id: 3, items: 'Pen', total: 84 }
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