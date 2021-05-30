import React, { useState } from "react";
import styled from "styled-components";
import { teresa_single_products } from "../utils/teresa-single-products";
const ProductImages = () => {
  const [main, setMain] = useState(teresa_single_products[0]);
  return (
    <Wrapper>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {teresa_single_products.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(teresa_single_products[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
      object-fit: contain;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
      object-fit: contain;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
