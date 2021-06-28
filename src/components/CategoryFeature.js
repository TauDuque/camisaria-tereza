import React from "react";
import styled from "styled-components";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  PageHero,
} from "../components";
import { getUniqueValues } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
import Product from "./Product";

const CategoryFeature = () => {
  const {
    filters: { category },
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  console.log(categories);

  return (
    <Wrapper className="page">
      <PageHero title="Categorias" />
      <div className="section-center ">
        {categories.filter((cat) => {
          return cat !== "tudo";
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default CategoryFeature;
