import { BiArrowFromBottom } from "react-icons/bi";
import styles from "./ToTopBtn.module.scss";

export default function ToTopBtn({ href }) {
  return (
    <a className={styles.btn} href={href}>
      <BiArrowFromBottom />
    </a>
  );
}
