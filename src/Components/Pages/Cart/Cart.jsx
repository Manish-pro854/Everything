import React from 'react';
import { useSelector } from 'react-redux';
import ec from "../../../assets/emptycart.png";
import CartCard from '../../Cards/CartCard/CartCard';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.totalAmount);

  return (
    <div className='cart w-[100%] min-h-[100vh] flex items-center justify-start flex-col pt-45 lg:pt-30'>
      {cartItems.length <= 0 ? (
        <div className='empty-cart w-[100%] h-[100%] flex items-center justify-start flex-col gap-5'>
          <img src={ec} alt="empty cart" className='w-[90%] max-w-[400px] mt-[40px]'/>
          <h1 className='text-center text-2xl font-[600]'>Empty Cart</h1>
        </div>
      ) : (
        <div className="cartCard-section w-[100%] flex items-center justify-center flex-col gap-5">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))}
          <div className="price-section flex items-center justify-center flex-col text-xl">
            <span>Total Products: {cartItems.length}</span>
            <span>Total Price: ₹{cartTotal}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
