import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";

const Bar = styled.header`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
const headerStyle = {
  backgroundColor: "#2a2a72",
  fontSize: "1.3rem",
  textTransform: "capitalize",
  padding: "8px 3rem"
};

const Header = () => {
  return (
    <Bar style={headerStyle} className="navbar">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center" style={{marginLeft: "0.5rem"}}>
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus " />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </Bar>
  );
}

export default Header;