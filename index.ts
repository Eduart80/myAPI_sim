import { fetchProductCatalog,
        fetchProductReviews
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
