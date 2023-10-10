import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Shop from "./components/shop";
import './App.css';
import Cart from './components/Cart';

//rest will be 2:54

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false)
  const [show, setShow] = useState(true);

  const handleclick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item])
  }


  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    console.log(tempArr)
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr])
  }
  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {
        show ? <Shop handleclick={handleclick} />
          : < Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }

      {
        warning && <div className="warning">
          <p>it's already in your cart</p>
        </div>
      }
    </div>
  )
}

export default App
