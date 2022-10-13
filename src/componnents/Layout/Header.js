import { Fragment } from "react";
//import Button from '@mui/material/Button';
//import { styled } from '@mui/material';
import HeaderButton from './HeaderButton';
//import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import myImage from "../../assets/close-up-hand-holding-tasty-burger.jpg";
//import Button from "@mui/material/Button";
//import styled from "styled-components";
//import Button from '@mui/material/Button';


const Header = (props) => {
  return (
    <Fragment>
       
      <header className={classes.header}>
        <h1>Your Food</h1>
        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={myImage} alt="A sandwich!" />
      </div>
    </Fragment>
  );
};

export default Header;
