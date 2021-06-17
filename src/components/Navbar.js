import React from "react";
import styled from "styled-components";
import tere_logo from "../assets/tere_logo.jpg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={tere_logo} alt="logo Camisaria Tereza" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    background: var(--sch-clr-13);
    height: 100px;
    width: 99vw;
    margin: 0 0;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 75px;
      width: 175px;
      margin-left: 20px;
      margin-top: 8px;
      object-fit: cover;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    margin-right: 10px;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    height: 7rem;
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 815px auto;
      align-items: center;
      margin: 0 15px;
    }
    .nav-header {
      img {
        margin-left: 40px;
        margin-top: 2px;
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
