import Image from "next/image";
import styles from "./Circle.module.scss";
import CircularText from "../CircularText/CircularText";

export default function Circle() {
  return (
    <div className={styles.circle}>
      <Image
        className={styles.img}
        src="/assets/imgs/blue-me.png"
        alt="logo"
        width={250}
        height={250}
        priority
      />
      <CircularText className={styles.circTxt} />
    </div>
  );
}
