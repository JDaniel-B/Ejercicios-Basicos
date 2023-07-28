import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkHome({color}) {
  return (
    <NavLink className={`${styles.ButtonHome} ${color}`} to={"/"}>
      <div className={styles.ButtonHome__Icono}>
        <FontAwesomeIcon icon="fa-solid fa-left-long" />
      </div>
      <span className={styles.ButtonHome__Span}>
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </span>
    </NavLink>
  );
}

export default LinkHome;
