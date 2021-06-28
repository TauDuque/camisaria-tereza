import React from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  FeaturedCategories,
} from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
