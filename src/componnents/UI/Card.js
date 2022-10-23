import React from "react";
//import styled from "styled-components";
import "./Card.css";
// const styleddiv = styled.div`
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
//   background-color: white;
// `;

const Card = (props) => {
  const classes = "card " + props.className;

  return <section className={classes}>{props.children}</section>;
};
export default Card;
