import { fetchProductCatalog,
        fetchProductReviews,
        fetchSalesReport
 } from './apiSimulator';

 // get all
 async function getProduct() {
    
   await fetchProductCatalog()
     .then((data)=>{
         console.log(data);
        })
        .catch((err)=>{
            console.log('Error in get all data api ',err);
        })
        .finally(()=> console.log("Get All data from api is complete."))
}
getProduct()

// get by id
async function productReport(params:number) {
    
   await fetchProductReviews(params)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log('Error in get by id api ', err);
    })
    .finally(()=> console.log("Get data by ID api is complete."))
}
productReport(2)

// get sale by id
async function saleReport(params:string) {
    
   await fetchSalesReport(params)
    .then((res)=>{
        res.map((res)=> {
            console.log(`Book sold: ${res.unitSale}, with a price of ${res.price}`)
        })
    })
    .catch((err)=>{
        console.log('Error in sale report api ',err);
    })
    .finally(()=> console.log("Get sale by item name report from api is complete."))
}
saleReport('Book')
