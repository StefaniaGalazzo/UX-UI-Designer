"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./ContactSticky.module.scss";
import { AiOutlineCopy } from "react-icons/ai";

export default function ContactSticky({ onclick }) {
  // open & close the contact popup
  const [isOpen, setIsOpen] = useState(false);

  // copy the mail to clipboard
  const myEmail = "galazzostefania@gmail.com";
  const textToCopy = myEmail;

  const [isCopied, setIsCopied] = useState(false); //need this to open the div with the message
  const message = "Copied!";

  const copyText = (e) => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    console.log(textToCopy);
  };
  return (
    <div
      className={`${styles.fixed} + ${styles.shadow2}`}
      style={{
        borderRadius: "50px",
        height: "40px",
        width: "40px",
        display: "grid",
        placeContent: "center",
        padding: "5px",
      }}
      onClick={() => {
        setIsOpen(!isOpen);
        console.log("setIsOpensetIsOpensetIsOpen");
      }}
    >
      {isOpen && (
        <>
          <p className={styles.mail}>
            <span> galazzostefania@gmail.com</span>
          </p>
          <p onClick={copyText} className={styles.mail} style={{ top: "35px" }}>
            Copy
          </p>
          <p className={styles.mail} style={{ top: "35px", left: " -131px" }}>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              style={{ margin: "0" }}
            >
              Open Gmail
            </a>
          </p>
        </>
      )}
      {isCopied && <p className={styles.copied}>{message}</p>}
      <Image
        src="/assets/imgs/blue-monogram.png"
        alt="send me an email"
        width={30}
        height={30}
      />
    </div>
  );
}
