import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import img1 from './amazon-logo.jpg';


function App() {

  const [indata,setindata] = useState('');
  const [prsdata,setprsdata]=useState(null);
  const [crtdata,setcrtdata]=useState([]);


  console.log(indata);

  function chHandler(e){

    setindata(e.target.value);

  

  }

  async function btnhandler(){

    if(indata==="")
    {
      alert("Invalid Input");

      return ;
    }

    const apiUrl=`https://dummyjson.com/products/search?q=${indata}`;
    

    try {
      // Construct the URL with the query parameter
      

      // Make the fetch call using async/await
      const response = await fetch(apiUrl);

      // Parse the response as JSON
      const result = await response.json();

      console.log("Hello");
      console.log(result);

      if(result.limit==0)
      {
        alert("No products found");
        setprsdata(null);
        return ;

      }

      // Set the fetched data to the state
      setprsdata(result);
      console.log(prsdata);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
    






  }





  return (
    <div className="App">
      <img src={img1} alt="Hello" height='70px' width='70px'></img>
      <input type="text" onChange={chHandler}></input>
      <button onClick={btnhandler}>Search</button>


      <nav>
        <Link to="/cart">Cart</Link>
        <br/>
        <Link to="/">Products</Link>
      </nav>
       
       

      
       
        <Routes>
        
          <Route path="/" element={<Products crtdata={crtdata} setcrtdata={setcrtdata} prsdata={prsdata}/>} />
          <Route path="/cart" element={<Cart ct={crtdata}/>} />




        </Routes>

      


    </div>
    
  );
}

export default App;
