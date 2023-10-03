/* eslint-disable @next/next/no-img-element */
import Section from "@/app/_components/UI/Section/Section";
import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import "/app/global.scss";
import styles from "@/styles/pagesModules/queers.module.scss";
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
            "A mobile app that offers itself as a point of reference for the LGBTQ+ community, dedicated on the one hand to providing services, entertainment and products to users; on the other hand to helping local associations to network in the area with collaborations and information, awareness-raising actions, training, support etc."
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
            After interviewing a sample included in the reference target,
            different User Personas, User Journeys and an empathy map were
            outlined. Nel target si individuano tre tipi principali di utenti:
            1) chi ha bisogno di usufruire di servizi o supporto, che spesso
            preferisce rimanere anonimo e non registrarsi; 2) chi è più
            interessato alla parte ludica e al vivere la community; 3) le
            associazioni che vogliono rendere raggiungibili e promuovere le
            proprie attività rivolte alla comunità.
          </p>
          <div className={styles.imgs}>
            <img src="/assets/imgs/queers-personas.png" alt="user-persona-1" />
            <img
              src="/assets/imgs/queers-personas-2.png"
              alt="user-persona-2"
            />
          </div>
        </section>

        {/* WIRE SECTION */}
        <a id={"wireframe"} className={styles.anchor}></a>
        <section className={styles.secondInnerSection}>
          <h1>Wireframe</h1>
          <div className={styles.textBoxes}>
            <p>
              For this project the wireframes were digitally sketched with
              temporary vector graphics
            </p>
          </div>

          <img
            src={"/assets/imgs/queers-wireframe.png"}
            alt="wireframe"
            width={"80%"}
            height={"auto"}
            className={styles.mockup}
          />
        </section>

        {/* UI SECTION */}
        <a id={"ui"} className={styles.anchor}></a>
        <section className={styles.secondInnerSection}>
          <h1>UI Design and Prototype</h1>
          <div className={styles.textBoxes}>
            <p>
              After designing the UX and establishing the color scheme, icons
              and elements, here is the interface design and a brief video of
              the prototype in HD wireframes. The entire application has
              approximately 127 screens.
            </p>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <video controls autoPlay muted loop>
                {/* <source src="myVideo.webm" type="video/webm" /> */}
                <source
                  src="/assets/videos/queers-intro.mp4"
                  type="video/mp4"
                />
                <p>
                  Your browser doesn&apos;t support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
            <div className={styles.videoWrapper}>
              <video controls autoPlay muted loop>
                {/* <source src="myVideo.webm" type="video/webm" /> */}
                <source
                  src="/assets/videos/queers-ospite.mp4"
                  type="video/mp4"
                />
                <p>
                  Your browser doesn&apos;t support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
            <div className={styles.videoWrapper}>
              <video controls autoPlay muted loop>
                {/* <source src="myVideo.webm" type="video/webm" /> */}
                <source
                  src="/assets/videos/queers-associazione.mp4"
                  type="video/mp4"
                />
                <p>
                  Your browser doesn&apos;t support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
            </div>
          </div>
        </section>
        <ToTopBtn href={"#top"} toTOP />
        <Footer />
      </div>
      {/* <Pagination pages={pages} page={1} lastPage={lastPage} /> */}
    </>
  );
}
