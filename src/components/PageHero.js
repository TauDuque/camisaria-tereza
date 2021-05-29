import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg_pattern3 from "../assets/bg_pattern-3.jpg";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/Roupas</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 97.8%;
  min-height: 12vh;
  margin: 10px 15px;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  h3,
  a {
    color: var(--clr-black);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

/*  background-image: url(${bg_pattern3});
  background-repeat-y: repeat;
  background-size: contain;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35); */

export default PageHero;
