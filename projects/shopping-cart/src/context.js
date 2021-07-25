import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct as productDetails } from "./data";

const ProductContext = React.createContext();

const ProductProvider = props => {
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [modalProduct, setModalProduct] = useState({});
  const [modalOpen, setModalOpen] = useState({});

  useEffect(() => {
    setDefaultProducts();
  }, []);

  const setDefaultProducts = () => {
    let products = [];

    storeProducts.forEach(item => {
      const singleItem = { ...item };

      products = [...products, singleItem];
    });
    setProducts(products);
  };

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
    return products.find(item => item.id === id);
  };

  const handleDetail = id => {
    const product = getItem(id);
    setDetailProduct(product);
  };

  const addToCart = id => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    const price = product.price;

    product.inCart = true;
    product.count = 1;
    product.total = price;

    setProducts(tempProducts);
    setCart([...cart, product]);
    setDetailProduct({...product});
  };

  const increment = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    setCart([...tempCart]);
  };

  const decrement = id => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
    }
  };

  const removeItem = id => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];

    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => item.id !== id);

    setCart([...tempCart]);
    setProducts([...tempProducts]);
  };

  const getTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    return {
      subTotal,
      tax,
      total
    };
  };

  const addTotals = () => {
    const totals = getTotals();

    setCartSubTotal(totals.subTotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };

  useEffect(() => {
    addTotals();
  }, [products, cart, detailProduct]);

  const clearCart = () => {
    setCart([]);
    setDefaultProducts();
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
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        addToCart,
        modalProduct,
        modalOpen,
        handleDetail,
        increment,
        decrement,
        removeItem,
        clearCart,
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
