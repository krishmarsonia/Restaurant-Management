import { getAllProducts } from "@/actions/productPageActions";
import { ProductInterface } from "@/types/productsTypes";
import React from "react";
import ItemAccordian from "./itemAccordian";

const FoodItemsPage = async () => {
  const products: ProductInterface[] = await getAllProducts();
  return (
    <div>
      {/* {products.map((prods) => { */}
      <center>
        <h1>Edit Items</h1>
      </center>
      <ItemAccordian prods={JSON.stringify(products)} />
      {/* })} */}
    </div>
  );
};

export default FoodItemsPage;
