import React from 'react';
import { LicensePlate } from '../license-plate/LicensePlate';
import { Jumbotron } from '../jumbotron/Jumbotron';
import { useCart } from "../cart-service/cart-hook";

export function CartView(props) {
  // Correctly destructure useCart to include removePlateFromCart
  const [cartContents, , removePlateFromCart] = useCart();  

  const removeItemFromCart = (plate) => {
    removePlateFromCart(plate).then(() => {
      console.log(`Removed plate ${plate.title} from the cart`);
    });
  };

  let rows;
  if (cartContents) {
    rows = cartContents.map((licensePlate, index) => {
      return (
        <div 
          key={licensePlate._id} 
          className="col-md-4" 
          style={{ backgroundColor: (index % 2 === 0) ? '#F5F5F5' : '' }}
        >
          <LicensePlate 
            currency={props.currency}  // Pass the currency prop
            plate={licensePlate} 
            buttonText="Remove from cart &times;" 
            onButtonClicked={() => removeItemFromCart(licensePlate)}  // Pass the remove function
          />
        </div>
      );
    });
  }
  
  return (
    <>
      <Jumbotron title="My Cart" description="Your current cart contents:"/>
      <div className="container">
        {rows && rows.length === 0 && <div className="alert alert-info" role="alert">Your cart is empty</div>}
        <div className="row" >
          {rows}
        </div>
        <hr/>
      </div>
    </>
  );
}
