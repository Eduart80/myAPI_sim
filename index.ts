import { fetchProductCatalog } from './apiSimulator';

fetchProductCatalog()
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
        
    })
