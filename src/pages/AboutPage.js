import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-3.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="sobre" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Sobre Tereza</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            exercitationem, quae eos veritatis ratione reiciendis eaque nemo
            ullam. Porro odit ea aliquam. Aspernatur, sunt. At natus nobis
            quaerat id. Obcaecati unde iure explicabo dolorem molestiae
            praesentium iusto ipsam dolorum quae, dolore nulla beatae eos
            mollitia magnam nisi repellendus? Natus, nemo!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 485px;
    display: block;
    border-radius: var(--radius);
    height: 420px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
