
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
        }, 5000);
    });
}

// fetchProductCatalog()
//     .then((res) => {
//         console.log(res)
//     });