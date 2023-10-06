import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { BiDownload } from "react-icons/bi";
import "@/app/global.scss";

export default function Navbar({ id }) {
  const router = useRouter();
  return (
    <nav
      className={styles.nav}
      // style={{
      //   background:
      //     "linear-gradient(to bottom, rgba(4, 0, 71, 1) 10%, rgba(9, 9, 121, 0.28) 100%))",
      // }}
    >
      <Link href={"/"} className={styles.imageContainer}>
        <div className="arrow"></div>
        <Image
          className={styles.logo}
          src="/assets/imgs/logo-yellow.png"
          alt="logo"
          width={65}
          height={65}
          priority
        />
      </Link>
      <p
        className={styles.pagesNav}
        style={
          router.pathname == "/skills"
            ? { color: "#e6ffa2", fontWeight: "bold" }
            : {}
        }
      >
        {/* {console.log(router)} */}
        <Link
          href="/skills"
          className={
            router.pathname == "/skills" ? styles.nostyle : styles.aNav
          }
        >
          Skills
        </Link>
        {router.pathname == "/skills" && <span className={styles.line}></span>}
      </p>

      <a
        href="/assets/files/CV-StefaniaGalazzo-2023-2024.pdf"
        download
        className={styles.downloadCV}
      >
        <BiDownload /> CV
      </a>
    </nav>
  );
}
