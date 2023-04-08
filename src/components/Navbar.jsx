import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "@/context/StateContext";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    setTotalQuantities,
    totalQuantities,
    setTotalPrice,
    setCartItems,
    cartItems,
    totalPrice,
  } = useStateContext();

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    if (initialValue) {
      setCartItems(initialValue.cartItems);
      setTotalQuantities(initialValue.totalQuantities);
      setTotalPrice(initialValue.totalPrice);
    } else return;
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ cartItems, totalPrice, totalQuantities })
      );
    }
  }, [cartItems]);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">JSM Headphones</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
