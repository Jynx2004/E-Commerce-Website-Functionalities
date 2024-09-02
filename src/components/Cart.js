import React from "react";

function Cart(props){
    let products=props.ct;

    const uniqueProducts = [...new Set(products.map(product => JSON.stringify(product)))].map(product => JSON.parse(product));

    console.log("In cart");
    console.log(uniqueProducts);

    return(

        <div>
        {/* Check if products array has elements */}
        {uniqueProducts.length > 0 ? (
            uniqueProducts.map((product) => (
                <div key={product.id} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
                    <h2>{product.title}</h2>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                    <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                    <p><strong>Rating:</strong> {product.rating}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
                </div>
            ))
        ) : (
            <p>No products in the cart.</p>
        )}
    </div>
        
    )

}

export default Cart;