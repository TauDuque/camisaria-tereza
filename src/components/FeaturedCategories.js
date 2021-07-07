import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { getValues } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
import { categorias_tipos } from "../utils/constants";
import {
  agulha_icn,
  batacanga_icn,
  blusa_icn,
  cadibe_icn,
  costura_1_icn,
  costura_2_icn,
  costura_3_icn,
  family_icn,
  infantil_icn,
  kimono_icn,
  maquina_icn,
  paleto_icn,
  saia_icn,
  vestido_icn,
  camisa_icn,
} from "../assets/icons";

const FeaturedCategories = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  const {
    filters: { category },
    updateFilters,
    all_products,
  } = useFilterContext();
  console.log(category);

  const cats = getValues(all_products, "category").sort();
  console.log(cats);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Escolha por Categorias</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <div className="img-container">
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${batacanga_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[0]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Bata-Cangas</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${blusa_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[1]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Blusas</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${camisa_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[2]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Camisas</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${infantil_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[3]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Infantil</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${paleto_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[4]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Cobertores-casacos</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${kimono_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[5]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Kimonos</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${saia_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[6]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Saias</p>
            </div>
          </div>
          <div className="button-img">
            <Link to="/products">
              <button
                style={{
                  backgroundImage: `url(${vestido_icn})`,
                }}
                className="social-btn"
                type="button"
                name="category"
                value={cats[7]}
                onClick={(e) => updateFilters(e)}
              ></button>
            </Link>
            <div className="nome">
              <p>Vestidos</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--sch-clr-3);
  .button-img {
    margin: 20px 10px;
    display: grid;
    gap: 8px;
    text-align: center;
  }
  .button-img p {
    display: contents;
  }
  .social-btn {
    background-position: center center;
    background-size: 90px;
    background-repeat: no-repeat;
    height: 120px;
    width: 140px;
    cursor: pointer;
    box-shadow: var(--dark-shadow);
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  .img-container {
    display: flex;
  }
  .img-container p {
    font-family: var(--font-cate-1);
  }
  .social-btn:hover {
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
