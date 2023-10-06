import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import React from "react";
import styles from "@/styles/pagesModules/threeDAndMore.module.scss";

export default function ThreeDAndMore() {
  return (
    <div>
      <Navbar />
      <ContactSticky />
      <section className={styles.container} id={"threejs"}>
        <h1>Testing Three.js library</h1>
        <div className={styles.innerSection}>
          <p>
            Three.js is the perfect Library to implement 3d elements in a
            React-app. This is a simple donut that interacts when the mause goes
            into hover, from desktop, to tap on mobile, even if the responsive
            is not currently optimized.
            <br />
            <span className={styles.highlighted}>
              <a href="https://3d-donut-threejs-reactjs.vercel.app/">
                {">>"} Try it
              </a>
            </span>
          </p>

          <div className={styles.videoWrapper}>
            <video controls autoPlay muted loop>
              {/* <source src="myVideo.webm" type="video/webm" /> */}
              <source src="/assets/videos/donut.mp4" type="video/mp4" />
              <p>
                Your browser doesn{"'"}t support HTML video. Here is a
                <a href="myVideo.mp4">link to the video</a> instead.
              </p>
            </video>
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
      <section className={styles.container} id={"p5js"}>
        <h1>Testing P5.js library</h1>
        <div className={styles.innerSection}>
          <p>
            P5.js is a JavaScript library for creative coding, with a focus on
            making coding accessible and inclusive for artists, designers,
            educators and anyone else. It{"'"}s free and open-source.
            <br />
            <span className={styles.highlighted}>
              <a href="https://stefaniagalazzo.github.io/p5js-fractal-loop/">
                {">>"} Try it
              </a>
            </span>
          </p>

          <div className={styles.videoWrapper}>
            <video controls autoPlay muted loop>
              {/* <source src="myVideo.webm" type="video/webm" /> */}
              <source src="/assets/videos/p5j.mp4" type="video/mp4" />
              <p>
                Your browser doesn{"'"}t support HTML video. Here is a
                <a href="myVideo.mp4">link to the video</a> instead.
              </p>
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
