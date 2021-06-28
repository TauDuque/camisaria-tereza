import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { categorias_tipos } from "../utils/constants";

const FeaturedCategories = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Principais categorias</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {categorias_tipos.map((product) => {
          return (
            <div className="img-container">
              <img src={product.icone} alt="icone" />
              <div className="nome">
                <p>{product.nome}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--sch-clr-3);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 350px;
      box-shadow: var(--dark-shadow);
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .img-container img {
    background-color: snow;
    height: 120px;
    padding: 25px;
  }
  .img-container p {
    font-family: var(--font-cate-1);
  }
  .img-container:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .nome {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 576px) {
    .featured {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

/*  margin: 2rem 10rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) */

export default FeaturedCategories;
