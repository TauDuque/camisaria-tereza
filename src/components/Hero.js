import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainpic from "../assets/mainpic.jpg";
import mainpic2 from "../assets/mainpic2.jpg";
import bg_pattern from "../assets/bg-pattern-4.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Camisaria Tereza <br />
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          rerum pariatur recusandae deleniti dolores sed distinctio voluptatibus
          iste asperiores tenetur.
        </p>
        <Link to="/products" className="btn hero-btn">
          veja as roupas
        </Link>
      </article>
      <article className="img-container">
        <img src={mainpic} alt="nice table" className="main-img" />
        <img src={mainpic2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .img-container {
    display: none;
  }
  h1 {
    font-family: var(--font-cate-1);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-family: var(--font-cate-6);
      margin-bottom: 2rem;
      text-transform: uppercase;
      font-size: 5rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      background-color: var(--sch-clr-8);
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 505px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: scale-down;
    }
    .accent-img {
      position: absolute;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      bottom: 0;
      left: 0;
      width: 225px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      background-color: var(--logo-clr-4);
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      box-shadow: inset 0 0 0 30px rgba(126, 160, 149, 0.07);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

/*  background-image: url(${bg_pattern});
      background-size: cover; */

export default Hero;
