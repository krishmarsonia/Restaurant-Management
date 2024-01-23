"use client";
import React, { useContext } from "react";
import Lottie from "lottie-react";

import * as LoadingLottie from "@/utils/Animation - 1705727249056.json";

import "./orderPlacedLottie.css";
import OrderContext from "@/context/orderContext/orderContext";



const OrderPlacedLottie = () => {
  const { OrderLottieOpen } = useContext(OrderContext);
  if (OrderLottieOpen === true) {
    return (
      <div className="loadingMainContainer">
        <div className="loadingInnerContainer">
          <h1>Order Placed</h1>
          <Lottie animationData={LoadingLottie} style={{ height: "200px" }} />
        </div>
      </div>
    );
  }
  
};


export default OrderPlacedLottie;
