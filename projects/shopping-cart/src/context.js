import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct as productDetails } from "./data";
const ProductContext = React.createContext();

const ProductProvider = props => {
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [modalProduct, setModalProduct] = useState({});
  const [modalOpen, setModalOpen] = useState({});

  useEffect(() => {
    setProducts(storeProducts);
  }, []);

  useEffect(() => {
    setDetailProduct(productDetails);
  }, []);

  useEffect(() => {
    setModalProduct(productDetails);
  }, []);

  useEffect(() => {
    setModalOpen(false);
  }, []);

  const getItem = id => {
    const product = products.find(item => item.id === id);
    return product;
  };

  const handleDetail = id => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const openModal = id => {
    const product = getItem(id);

    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        modalProduct,
        modalOpen,
        handleDetail,
        openModal,
        closeModal
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
