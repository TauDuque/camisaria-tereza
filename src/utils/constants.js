import React from "react";
import { GiCompass, GiDiamondHard, GiSewingNeedle } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi";
import camisas from "../assets/camisas.jpg";
import saias from "../assets/saias.jpg";
import { ImScissors } from "react-icons/im";
import infantil from "../assets/5-infantil-1.jpg";
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
    icon: costura_2_icn,
    title: "Diversos tipos de tecido",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.",
  },
  {
    id: 2,
    icon: maquina_icn,
    title: "Tudo autoral e autêntico",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.",
  },
  {
    id: 3,
    icon: family_icn,
    title: "Também oferecemos roupas infantis",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea.",
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

export const categorias_tipos = [
  {
    id: 1,
    nome: "camisas",
    icone: camisa_icn,
  },
  {
    id: 2,
    nome: "bata-cangas",
    icone: batacanga_icn,
  },
  {
    id: 3,
    nome: "blusas",
    icone: blusa_icn,
  },
  {
    id: 4,
    nome: "infantil",
    icone: infantil_icn,
  },
  {
    id: 5,
    nome: "kimonos",
    icone: kimono_icn,
  },
  {
    id: 6,
    nome: "saias",
    icone: saia_icn,
  },
  {
    id: 7,
    nome: "vestidos",
    icone: vestido_icn,
  },
  {
    id: 8,
    nome: "jaqueta",
    icone: paleto_icn,
  },
];
