import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";

function Link({ route, name }) {
  return (
    <NavLink
      className={`${styles.Button} text-2xl h-20 w-4/5 rounded-md place-content-center grid`}
      to={route}
    >
      {name}
    </NavLink>
  );
}

export default Link;
