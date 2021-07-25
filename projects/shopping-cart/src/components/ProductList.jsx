import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import "./ProductList.css";

const ProductWrapper = styled.section`
  .pb-5, .py-5 {
    padding-bottom: 3rem!important;
  }
  .pt-5, .py-5 {
    padding-top: 3rem!important;
  }
`;

const ProductList = () => {
  return (
    <>
      <ProductWrapper className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
}

export default ProductList;