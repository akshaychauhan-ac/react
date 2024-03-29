import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  @media (min-width: 992px) {
    .col-lg-4 {
      flex: 0 0 33.333333% !important;
      max-width: 33.333333% !important;
    }
  }
  @media (min-width: 768px) and (max-width: 991px)
    .col-md-6 {
      flex: 0 0 50% !important;
      max-width: 50% !important;
    }
  }
  .col-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`;

const Modal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    id="modal"
                  >
                    <h5>item added to cart</h5>
                    <img src={img} className="img-fluid" alt="" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Continue Shopping
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer
                        cart
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
