import React from "react";
import styles from "./Card.module.scss";
import Image from "next/image";

export default function Card({
  title,
  imgs,
  text,
  innerHtml,
  edu,
  btn,
  className,
}) {
  return (
    <div className={`${styles.shadow2} + ${className}`}>
      <h1>{title}</h1>
      {imgs && (
        <div className={styles.iconContainer}>
          {imgs &&
            imgs.map((img, indx) => (
              <div
                key={indx}
                className={styles.iconSkill}
                data-title={img.description}
              >
                <Image
                  className={`${styles.shadow} + ${styles.icon}`}
                  src={img.src}
                  alt={img.alt}
                  id={img.id}
                  width={50}
                  height={50}
                />
              </div>
            ))}
        </div>
      )}

      {text && <p> {text}</p>}
      {innerHtml && (
        <div
          className={styles.innerHtml}
          dangerouslySetInnerHTML={{
            __html: innerHtml,
          }}
        ></div>
      )}

      {btn && <a href={btn}> Download my CV </a>}
    </div>
  );
}
