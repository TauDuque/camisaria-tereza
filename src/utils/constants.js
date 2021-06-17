import React from "react";
import { GiCompass, GiDiamondHard, GiSewingNeedle } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi";
import camisas from "../assets/camisas.jpg";
import saias from "../assets/saias.jpg";
import { ImScissors } from "react-icons/im";
import infantil from "../assets/5-infantil-1.jpg";
export const links = [
  {
    id: 1,
    text: "Início",
    url: "/",
  },
  {
    id: 2,
    text: "sobre",
    url: "/about",
  },
  {
    id: 3,
    text: "produtos",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImScissors />,
    title: "conteito",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiSewingNeedle />,
    title: "visão",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiLoincloth />,
    title: "historia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const categorias_img = [
  {
    id: 1,
    img: camisas,
  },
  {
    id: 2,
    img: saias,
  },
  {
    id: 3,
    img: infantil,
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
