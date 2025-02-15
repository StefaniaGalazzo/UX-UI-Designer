import { BiArrowFromBottom } from "react-icons/bi";
import styles from "./ToTopBtn.module.scss";

export default function ToTopBtn({
  href,
  toTOP,
  toPosition,
  download,
  blank,
  txt,
}) {
  return (
    <a
      className={toTOP ? styles.toTOPbtn : styles.toPosition}
      href={href}
      download={download && download}
      target={blank ? "_blank" : ""}
    >
      {toTOP && <BiArrowFromBottom />}
      {toPosition && <>{txt}</>}
    </a>
  );
}
