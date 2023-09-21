import MailBtn from "../../organisms/MailBtn/MailBtn";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Do you like what you see? Are you looking for a UX/UI designer for a
        project or to integrate into your team?
        <br />
        <span className="bold"> Contact me now</span>
        <br />
        <br />
        <span
          className="relative"
          style={{ margin: "0 20px", display: "block" }}
        >
          <MailBtn
            isFooter
            blank
            href={"https://mail.google.com/mail/u/0/#inbox"}
          />
        </span>
      </p>
    </div>
  );
}
