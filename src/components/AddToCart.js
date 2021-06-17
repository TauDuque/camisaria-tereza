import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ colors, item }) => {
  const { addToCart } = useCartContext();
  const { id } = useParams();

  const stock = 5;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((lastAmount) => {
      let newAmount = lastAmount + 1;
      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((lastAmount) => {
      let newAmount = lastAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((cor, index) => {
            return (
              <button
                key={index}
                className={mainColor === cor ? "color-btn active" : "color-btn"}
                style={{ background: cor }}
                onClick={() => setMainColor(cor)}
              >
                {mainColor === cor ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          decrease={decrease}
          increase={increase}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, item)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
