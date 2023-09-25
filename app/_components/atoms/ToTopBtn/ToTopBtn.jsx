import { BiArrowFromBottom } from "react-icons/bi";
import styles from "./ToTopBtn.module.scss";

export default function ToTopBtn({ href, toTOP, toPosition }) {
  return (
    <a className={toTOP ? styles.toTOPbtn : styles.toPosition} href={href}>
      <BiArrowFromBottom />
    </a>
  );
}
