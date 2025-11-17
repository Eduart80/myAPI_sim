import { fetchProductCatalog,
        fetchProductReviews,
        fetchSalesReport
 } from './apiSimulator';

 // get all
fetchProductCatalog()
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
// get by id
fetchProductReviews(2)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
// get sale by id
fetchSalesReport('Book')
    .then((res)=>{
        res.map((res)=> {
            console.log(`Book sold: ${res.unitSale}, with a price of ${res.price}`)
        })
    })
    .catch((err)=>{
        console.log(err);
    })

