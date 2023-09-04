/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Section.module.scss";
import ButtonsShadow from "../../atoms/Buttons/ButtonsShadow";
export default function Section({
  title,
  subtitle,
  bodytext,
  cta,
  id,
  img,
  imgTitle,
  altimg,
  bckColor,
  txtColor,
  gridTemplArea,
  tags,
}) {
  return (
    <section
      id={id}
      className={styles.mainContainer}
      style={{
        background: bckColor,
        color: txtColor,
        gridTemplateAreas: gridTemplArea,
      }}
    >
      <div
        className={`${styles.col1} + ${styles.titleMessage}`}
        title={imgTitle}
      >
        <img src={img} alt={altimg} width={"auto"} />
      </div>
      <div className={styles.col2}>
        <h1>{title} </h1>
        <h2>{subtitle}</h2>
        <p>{bodytext}</p>
        <p>Includes:</p>
        <div className={`tag + ${styles.tag}`}>
          {tags &&
            tags.map((tag, indx) => (
              <a key={indx} href={tag.id && tag.id}>
                <h3>{tag.tag}</h3>
              </a>
            ))}
        </div>

        <div className={styles.highlighted}>
          {cta &&
            cta.map((c, indx) => (
              <a key={indx} href={c.link} target={c.blank && "_blank"}>
                {c.title}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
