import { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import myImage from "../../assets/close-up-hand-holding-tasty-burger.jpg";
import WelcomeCard from "./WelcomeCard";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Your Food Order App</h1>
        <HeaderButton onShow={props.onShow}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={myImage} alt="A sandwich!" />
        <WelcomeCard />
      </div>
    </Fragment>
  );
};

export default Header;
