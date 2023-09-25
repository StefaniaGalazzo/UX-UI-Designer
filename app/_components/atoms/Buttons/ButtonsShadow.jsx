// "use client";
import styles from "../Buttons/Buttons.module.scss";
import { BiDownload } from "react-icons/bi";

export default function ButtonsShadow({
  txt,
  href,
  blank,
  shadow,
  onclick,
  download,
}) {
  return (
    <a
      className={styles.btn}
      onClick={onclick && onclick}
      download={download && download}
      href={href && href}
      target={blank ? "_blank" : ""}
      style={shadow && { boxShadow: `5px 5px 0px 0px ${shadow}` }}
    >
      {download && <BiDownload />} {txt}
    </a>
  );
}
