"use client";
import React from "react";
import styles from "../Buttons/Buttons.module.scss";

export default function ButtonsShadow({ txt, href, blank, shadow, onclick }) {
  return (
    <a
      className={styles.btn}
      onClick={onclick && onclick}
      href={href && href}
      target={blank ? "_blank" : ""}
      style={shadow && { boxShadow: `5px 5px 0px 0px ${shadow}` }}
    >
      {txt}
    </a>
  );
}
