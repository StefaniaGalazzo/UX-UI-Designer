import ButtonsShadow from "../../atoms/Buttons/ButtonsShadow";
import MailBtn from "../../organisms/MailBtn/MailBtn";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Do you like what you see? Are you looking for a UX/UI designer for a
        project or to integrate into your team?
        <span className="bold"> Contact me now</span>
      </p>
      <div className={styles.btns}>
        <p className="relative" style={{ margin: "0 20px", display: "block" }}>
          <MailBtn
            isFooter
            blank
            href={"https://mail.google.com/mail/u/0/#inbox"}
          />
        </p>
        <p>
          <ButtonsShadow
            href={"/assets/CV_StefaniaGalazzo_2023.pdf"}
            txt={`CV`}
            download
          />
        </p>
      </div>
    </div>
  );
}
