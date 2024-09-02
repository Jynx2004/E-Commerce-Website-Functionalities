import React, { useState } from "react";

function Prod(props){

    const [ctbool,setctbool] = useState(true);


    let crtdata=props.crtdata;
    let setcrtdata=props.setcrtdata;
    let product=props.product;

    console.log(crtdata);
    console.log("crtdata");

    function bhandler(e){

        setcrtdata((prevdata) => [...prevdata,product]);
        console.log("bhandler function called and adding to cart");
        setctbool(false);
        
        
        



    }

    function rmhandler(e){

        setcrtdata((prevdata) =>
            prevdata.filter((item) => item.id !== product.id)
          );
        console.log("rmhandler function called and removing from cart");
        setctbool(true);


    }

    return(

     <div style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
      <h2>{product.title}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
      {ctbool===true ? (
        <button onClick={bhandler}>Add to Cart</button>
      ) : 
         (
            <div>
            <div>Added to Cart</div>
            <button onClick={rmhandler}>Remove from Cart</button>
            </div>

            
         )
      }
      
     </div>

    )



}


export default Prod;