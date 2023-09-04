import MailBtn from "../../organisms/MailBtn/MailBtn";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Do you like what you see? Are you looking for a UX/UI designer for a
        project or to integrate into your team?
        <span className="bold"> Contact me now</span>
        <span className="relative" style={{ margin: "0 20px" }}>
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
