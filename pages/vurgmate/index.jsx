/* eslint-disable @next/next/no-img-element */
import Section from "@/app/_components/UI/Section/Section";
import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import "/app/global.scss";
import styles from "@/styles/pagesModules/vurgmate.module.scss";
import { PiTrademarkRegistered } from "react-icons/pi";
import ToTopBtn from "@/app/_components/atoms/ToTopBtn/ToTopBtn";
import Footer from "@/app/_components/UI/Footer/Footer";
import Pagination from "@/app/_components/atoms/Pagination/Pagination";

export default function Vurgmate() {
  const pages = ["/vurgmate", "/queers-app", "/roomatch"];
  const lastPage = pages[pages.length - 1];
  return (
    <>
      <a id={"top"} className={styles.anchor}></a>
      <div className={styles.container}>
        <Navbar />
        <ContactSticky />
        <Section
          id="vurgmate"
          title={"Vurgmate"}
          subtitle={"Your best Vurger Experience"}
          bodytext={
            "Vurgmate is a food delivery app dedicated to vegan sandwiches lovers/addicted."
          }
          bckColor={"linear-gradient(-37deg, #147537 5%, #fcc3bc 69%)"}
          txtColor={"rgb(0, 86, 65)"}
          img={"/assets/imgs/vurgmate-mock-crop.png"}
          gridTemplArea={`"b a"`}
          tags={[
            { tag: "Brand Identity", id: "#brand" },
            { tag: "Wirefrime", id: "#wire" },
            { tag: "UX Design", id: "#ux" },
            { tag: "UI Design", id: "#ui" },
            { tag: "Mobile First", id: "#ui" },
            { tag: "Figma", id: "#ui" },
          ]}
        />

        {/* BRNAD SECTION */}
        <a id={"brand"} className={styles.anchor}></a>
        <section className={styles.innerSection} id={"brand"}>
          <h1>Brand Identity</h1>
          <div className={styles.textBoxes}>
            <p>
              The identity of the brand aims to be original and unequivocal. The
              name combines three main concepts: burger, veg, and soulmate.
            </p>
            <p>
              Vurgmate is the end result. The Font chosen is the Poppins, with
              an evergreen look, a clear and impactful sans-serif.
            </p>
            <h5>
              VURGMATE
              <span>
                <PiTrademarkRegistered />
              </span>
            </h5>
          </div>
          <div className={styles.colors}>
            <p>
              The colors chosen aim to be lively and fancy, easily linked to the
              field of Food, with the addition of green for an elegant touch, a
              fresh combination that connects to the concept of veg, green and
              healthy: a sensitive issues for the target audience.
            </p>
            <div className={styles.colorBox}>
              <div className={styles.colorDot} title="#fcc3bc"></div>
              <div className={styles.colorDot} title="#147537"></div>
              <div className={styles.colorDot} title="#08471e"></div>
            </div>
          </div>
        </section>

        {/* UX SECTION */}
        <a id={"ux"} className={styles.anchor}></a>
        <section className={styles.innerSection}>
          <h1>UX Design</h1>
          <p>
            After interviewing a sample, included in the reference target, User
            Personas, User Journeys and an Empathy Map were outlined.
          </p>
          <div className={styles.imgs}>
            <img src="/assets/imgs/personas-vurg-1.svg" alt="user-personas-1" />
            <img src="/assets/imgs/personas-vurg-2.svg" alt="user-personas-2" />
          </div>
        </section>

        {/* WIRE SECTION */}
        <a id={"wire"} className={styles.anchor}></a>
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
      {/* <Pagination pages={pages} page={0} lastPage={lastPage} /> */}
    </>
  );
}
