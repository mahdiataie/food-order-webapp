import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
const Sards = styled.section`
  text-align: center;
  max-width: 25rem;
  width: 90%;
  left: 25vw;
  top: 1vh;
  height: 40vh;
  margin: auto;
  margin-top: -27rem;
  position: relative;
  background-color: #ffff;
  color: black;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WelcomeCard = () => {
  return (
    <Sards>
      <Typography
        color={"#E3930F"}
        fontWeight="550"
        variant="h1"
        align="center"
        fontSize={75}
      >
        Welcome
      </Typography>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Sards>
  );
};
export default WelcomeCard;
