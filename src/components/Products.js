import React from "react";
import Prod from './Prod';


function Products(props){

let crtdata=props.crtdata;
let setcrtdata=props.setcrtdata;    
let data=props.prsdata;
console.log('i am marvel');
console.log(data);


return(
    <div>

        

        {data && data.products.length > 0 && (
        <div>
          <h1>Product Details</h1>
          {data.products.map((product) => (

                <Prod key={product.id} crtdata={crtdata} setcrtdata={setcrtdata} product={product} />
             
          ))}
        </div>
      )}



    </div>
       

        
    )

}

export default Products;