import { fetchProductCatalog,
        fetchProductReviews,
        fetchSalesReport
 } from './apiSimulator';
 import { NetworkError, DataError } from './errors';

 // get all
 async function getProduct() {
    
   await fetchProductCatalog()
     .then((data)=>{
         console.log(data);
        })
        .catch((err)=>{
            if (err instanceof NetworkError) {
                console.log('Network error:', err.message);
            } else if (err instanceof DataError) {
                console.log('Data error:', err.message);
            } else {
            console.log('Error in get all data api ',err);
            }
        })
        .finally(()=>{
             console.log("Get All data from api is complete.")
             console.log('\n ' )})
}
getProduct()

// get by id
async function productReport(params:number) {
    
   await fetchProductReviews(params)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
          if (err instanceof NetworkError) {
                console.log('Network error:', err.message);
            } else if (err instanceof DataError) {
                console.log('Data error:', err.message);
            } else {
            console.log('Error in get by id api ', err);
            }
        
    })
    .finally(()=>{ console.log("Get data by ID api is complete.")
                   console.log('\n ' )})
}
productReport(2)

// get sale by id
async function saleReport(params:string) {
    
   await fetchSalesReport(params)
    .then((res)=>{
        res.map((res)=> {
            console.log(`${params} sold: ${res.unitSale}, with a price of ${res.price}`)
        })
    })
    .catch((err)=>{
         if (err instanceof NetworkError) {
                console.log('Network error:', err.message);
            } else if (err instanceof DataError) {
                console.log('Data error:', err.message );
            } else {
            console.log('Error in sale report api ',err);
            }
    })
    .finally(()=>{
        console.log("Get sale by item name report from api is complete.") 
        console.log('\n ' )})
}
saleReport('Pen')
