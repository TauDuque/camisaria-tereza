import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    products: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`products/${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      {product.map((item, index) => {
        if (id === item.id) {
          const { name, price, description, colors, tecido, category, image } =
            item;
          return (
            <div key={index}>
              <PageHero title={name} product />
              <div className="section section-center page">
                <Link to="/products" className="btn">
                  voltar sessão roupas
                </Link>
                <div className="product-center">
                  <ProductImages image={image} />
                  <section className="content">
                    <h2 className="main-title">{name}</h2>
                    <h5 className="price">{formatPrice(price)}</h5>
                    <p className="desc">{description}</p>
                    <p className="info">
                      <span>Tecido : </span>
                      {tecido}
                    </p>
                    <hr />
                    <AddToCart colors={colors} item={item} />
                  </section>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
