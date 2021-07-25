import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct as productDetails } from "./data";
const ProductContext = React.createContext();

const ProductProvider = props => {
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});

  useEffect(() => {
    setProducts(storeProducts);
  }, []);

  useEffect(() => {
    setDetailProduct(productDetails);
  }, []);

  const getItem = id => {
    const product = products.find(item => item.id === id);
    return product;
  };

  const handleDetail = id => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        handleDetail
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
