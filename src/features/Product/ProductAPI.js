



// A mock function to mimic making an async request for data
export   function fetchAllProducts() {
  return new Promise(async (resolve) =>{const response = await fetch('http://localhost:8080/products')
const data = await response.json()
resolve ({data})}
  );
}


export   function fetchAllProductsByFilters(filter,sort) {

  
  console.log("passed object is : ", filter);
  // Formate of filter and sort object to pass it in api
 //filter= {"category":["smartPhone", "laptop","fragrance"]}
 //sort = {_sort:"price", _order:"desc"}


 let queryString = '';
 
 for (let key in filter) {
   const categoryvalues = filter[key];
   console.log("Hii here! ", filter[key]);
   if(categoryvalues.length)
   {

     const lastCategoryValue = categoryvalues[(categoryvalues.length)-1];
     console.log("Last value: ",lastCategoryValue);
     queryString+= `${key}=${lastCategoryValue}&`
   }
  }

  for (let key in sort)
  {
    queryString+= `${key}=${sort[key]}&`

  }
  console.log( "String is ",queryString);
 


  return new Promise(async (resolve) =>{const response = await fetch('http://localhost:8080/products?'+queryString)
const data = await response.json()
resolve ({data})}
  );
}
