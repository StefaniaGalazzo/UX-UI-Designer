/* eslint-disable @next/next/no-img-element */
import Section from "@/app/_components/UI/Section/Section";
import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import "/app/global.scss";
import styles from "@/styles/pagesModules/queers.module.scss";
import { PiTrademarkRegistered } from "react-icons/pi";
import ToTopBtn from "@/app/_components/atoms/ToTopBtn/ToTopBtn";
import Footer from "@/app/_components/UI/Footer/Footer";

export default function QueersApp() {
  return (
    <>
      <a id={"top"} className={styles.anchor}></a>
      <div className={styles.container}>
        <Navbar />
        <ContactSticky />
        <Section
          id="queersapp"
          title={"Queers App"}
          subtitle={"Find a safespace everywhere"}
          bodytext={
            "A mobile app that offers itself as a point of reference for the LGBTQ+ community, dedicated on the one hand to providing services, entertainment and products to users on the other hand to helping local associations to network in the area with collaborations and information, awareness-raising actions , training, support etc."
          }
          bckColor={"#fff6fe"}
          txtColor={"#dc6dd0"}
          img={"/assets/imgs/queers-mockup.png"}
          gridTemplArea={`"a b"`}
          shadow={"#4739de"}
          tags={[
            { tag: "UI Design", id: "#ui" },
            { tag: "UX Design", id: "#ux" },
            { tag: "UX Personas", id: "#personas" },
            { tag: "UX Interview", id: "#interview" },
            { tag: "Wirefrime", id: "#wirefrime" },
            { tag: "Prototype", id: "#prototype" },
            { tag: "Icon-set" },
            { tag: "Adobe XD" },
          ]}
        />

        {/* BRNAD SECTION */}
        <a id={"brand"} className={styles.anchor}></a>
        <section className={styles.innerSection} id={"brand"}>
          <h1>Brand Identity</h1>
          <div className={styles.textBoxes}>
            <p>
              the app is aimed primarily at the LGBTQ+ community, and entities
              close to and/or in support of the community{"'"}s rights; hence
              the name Queers, a highly used and strongly identifying term, with
              a direct reference and lively tone.
            </p>
            <p>
              The logo features the symbol par excellence of queer identities:
              the asterisk, in different variations to emphasize the concept of
              diversity. The colors recall the classic LGBT flag but once again
              underline the identity of the term {'"Queer"'} with its bright
              fuchsia
            </p>
            <div className={styles.logos}>
              <img src="/assets/imgs/logo-queers.png" alt="queers logo" />
              <img
                src="/assets/imgs/asterisk-logo.png"
                width={"60"}
                alt="queers-app logo"
              />
            </div>
          </div>
          {/* <div className={styles.colors}>
            <p>
              The colors chosen aim to be lively, linked to the field of Food in
              a fancy style, with the addition of green for an elegant
              combination, fresh and linked to the concept of veg, green and
              healthy. Sensitive issues for the target audience.
            </p>
            <div className={styles.colorBox}>
              <div className={styles.colorDot} title="#fcc3bc"></div>
              <div className={styles.colorDot} title="#147537"></div>
              <div className={styles.colorDot} title="#08471e"></div>
            </div> 
          </div> */}
        </section>

        {/* UX SECTION */}
        <a id={"ux"} className={styles.anchor}></a>
        <section className={styles.innerSection}>
          <h1>UX Design</h1>
          <p>
            After interviewing a sample included in the reference target, User
            Personas, User Journeys and an empathy map were outlined
          </p>
          <div className={styles.imgs}>
            <img src="/assets/imgs/personas-vurg-1.svg" alt="user-personas-1" />
            <img src="/assets/imgs/personas-vurg-2.svg" alt="user-personas-2" />
          </div>
        </section>

        {/* WIRE SECTION */}
        <a id={"wireframe"} className={styles.anchor}></a>
        <section className={styles.secondInnerSection}>
          <h1>Wireframe</h1>
          <div className={styles.textBoxes}>
            <p>
              Wireframes are the first draft to start imagining the best layout
              for the project. In this case, digitally hand-drawn.
            </p>
          </div>

          <img
            src={"/assets/imgs/vurg-wireframe-mockup.png"}
            alt="wireframe"
            width={"80%"}
            height={"auto"}
            className={styles.mockup}
          />
        </section>

        {/* UI SECTION */}
        <a id={"ui"} className={styles.anchor}></a>
        <section className={styles.secondInnerSection}>
          <h1>UI Design</h1>
          <div className={styles.textBoxes}>
            <p>
              After designing the UX and establishing the color scheme here is
              the interface design.
            </p>
          </div>
          <img
            src={"/assets/imgs/vurg-ui-mockup.png"}
            alt="UI design"
            width={"80%"}
            height={"auto"}
            className={styles.mockup}
          />
        </section>
        <ToTopBtn href={"#top"} toTOP />
        <Footer />
      </div>
    </>
  );
}
