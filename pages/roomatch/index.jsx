/* eslint-disable @next/next/no-img-element */
import Section from "@/app/_components/UI/Section/Section";
import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import "/app/global.scss";
import styles from "@/styles/pagesModules/vurgmate.module.scss";
import { PiTrademarkRegistered } from "react-icons/pi";
import ToTopBtn from "@/app/_components/atoms/ToTopBtn/ToTopBtn";

export default function Roomatch() {
  return (
    <>
      <a id={"top"} className={styles.anchor}></a>
      <div className={styles.container}>
        <Navbar />
        <ContactSticky />
        <Section
          id="roomatch"
          title={"Roomatch"}
          subtitle={"Find your perfect roomate!"}
          bodytext={`Tired of roomate horror stories? Welcome to RooMatch, a mobile first web app where you can find the perfect room at the perfect price with the perfect roommate!`}
          // cta={[
          //   { title: "the prototype", link: false },
          //   { title: "the project", link: "/roomatch" },
          // ]}
          bckColor={"#e2eef6"}
          txtColor={"#a90097"}
          img={"/assets/imgs/mobile-mockup-roomatch.png"}
          gridTemplArea={`"b a"  !important`}
          shadow={"#a90097"}
          tags={[
            { tag: "UI Design" },
            { tag: "Front-end" },
            { tag: "Inclusive UX" },
            { tag: "Mobile First" },
          ]}
        />

        {/* UI SECTION
        <a id={"ui"} className={styles.anchor}></a>
        <section className={styles.innerSection}>
          <h1>UI Design</h1>
          <div className={styles.textBoxes}>
            <p>
              The identity for the brand aims to be original and unequivocal.
              For the name choose to combine three main concepts: burger, veg,
              soulmate.
            </p>
          </div>
        </section> */}

        {/* UX SECTION
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
        </section> */}

        {/* WIRE SECTION
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
        </section> */}

        {/* UI SECTION */}
        <a id={"ui"} className={styles.anchor}></a>
        <section className={styles.secondInnerSection}>
          <h1>UI Design</h1>
          <div className={styles.textBoxes}>
            <p>
              The project was conceived starting from the mobile design and
              subsequently adapted for the desktop version.
            </p>
          </div>
          <img
            src={"/assets/imgs/roomatch-mockup.svg"}
            alt="UI design"
            width={"80%"}
            height={"auto"}
            className={styles.mockup}
          />
        </section>
        <ToTopBtn href={"#top"} />
      </div>
    </>
  );
}
