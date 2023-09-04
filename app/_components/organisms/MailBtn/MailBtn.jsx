import React, { useState } from "react";
import ButtonsShadow from "../../atoms/Buttons/ButtonsShadow";
import styles from "./MailBtn.module.scss";

export default function MailBtn({ isFooter, href, blank }) {
  // copy the mail to clipboard
  const myEmail = "galazzostefania@gmail.com";
  const textToCopy = myEmail;

  const [isCopied, setIsCopied] = useState(false); //need this to open the div with the message
  const message = "Copied!";

  const copyText = (e) => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2100);
    console.log(textToCopy);
  };
  return (
    <>
      <ButtonsShadow
        txt={"galazzostefania@gmail.com"}
        onclick={copyText}
        href={href}
        blank={blank}
      />
      {isCopied && (
        <p
          className={
            isFooter
              ? `${styles.copied} + ${styles.copiedFooter}`
              : `${styles.copied}`
          }
        >
          {message}
        </p>
      )}
    </>
  );
}
