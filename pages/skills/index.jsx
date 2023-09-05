"use client";

import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Card from "@/app/_components/organisms/Card/Card";
import Navbar from "@/app/_components/organisms/Navbar/Navbar";
import styles from "@/styles/pagesModules/skills.module.scss";

export default function skills() {
  const cardArr = [
    {
      title: "Main Skills",
      imgsArr: [
        {
          id: 0,
          src: "/assets/imgs/figma.svg",
          alt: "Figma software",
          description:
            "Figma is the vector-based collaborative design tool for building meaningful products.",
        },
        {
          id: 1,
          src: "/assets/imgs/xd.svg",
          alt: "XD  software",
          description:
            "Adobe XD is vector-based user experience design software for web and mobile apps produced by Adobe Creative Cloud.",
        },
        {
          id: 2,
          src: "/assets/imgs/dora.png",
          alt: "Dora AI",
          description:
            "Dora AI - Design and publish stunning 3D & animated websites effortlessly, without the need for coding. ",
        },
        {
          id: 3,
          src: "/assets/imgs/html5.svg",
          alt: "html5",
          description: "HyperText Markup Language",
        },
        {
          id: 4,
          src: "/assets/imgs/css3.svg",
          alt: "css3",
          description: "Cascading Style Sheets",
        },
        {
          id: 5,
          src: "/assets/imgs/illustrator.svg",
          alt: "Illustrator software",
          description:
            "Adobe Illustrator is a vector-based software for design",
        },
        {
          id: 6,
          src: "/assets/imgs/photoshop.svg",
          alt: "Photoshop software",
          description:
            "Adobe Photoshop is a bitmap-based software for photo editing",
        },
        {
          id: 7,
          src: "/assets/imgs/aftereffects.svg",
          alt: "Aftereffect software",
          description:
            "Adobe After Effects is professional-grade graphics animation, animation, compositing, and video editing software",
        },
      ],
    },
    {
      title: "About",
      innerHtml:
        "<span>💘 Love team work</span><br><span>🔝Thrilled  to improve</span><br><span>🏋️‍♀️ Motivated by my passions</span><br><span>🎯Focused on creativity</span><br><span>🏄‍♀️ New experiences addicted</span><br><span>🥰 Inclusivity lover</span><br><span>🌍 Citizen of the world</span><br><span>💻 Remote friendly",
      btn: "/downloadcv",
    },
    {
      title: "Other Skills",
      imgsArr: [
        {
          src: "/assets/imgs/react.svg",
          alt: "React.js",
          description:
            "React is an open-source, front-end, JavaScript framework for building user interfaces. ",
        },
        {
          src: "/assets/imgs/next.svg",
          alt: "Next.js",
          description: "The React Framework for the Web",
        },
        {
          src: "/assets/imgs/sass.svg",
          alt: "Sass preprocessor",
          description:
            "Sass is an extension of the CSS language that allows you to use variables, create functions and organize the style sheet into multiple files.",
        },
        {
          src: "/assets/imgs/three.svg",
          alt: "three.js for React",
          description:
            "Three.js is a cross-browser JavaScript library used to create and display animated 3D design using WebGL",
        },
        {
          src: "/assets/imgs/git.svg",
          alt: "git",
          description:
            "Git is a free and open source distributed version control system ",
        },
        {
          src: "/assets/imgs/github.svg",
          alt: "github",
          description:
            "Github is a developer platform to build, store, scale, and deliver secure software.",
        },
        {
          src: "/assets/imgs/js.svg",
          alt: "Javascript",
          description: "Javascript: base level",
        },
        {
          src: "/assets/imgs/ita.svg",
          alt: "Italian: native level",
          description: "Italian: native level",
        },
        {
          src: "/assets/imgs/eng.svg",
          alt: "English: 3/5 level",
          description: "English: 3/5 level",
        },
        {
          src: "/assets/imgs/esp.svg",
          alt: "Spanish: 3/5 level",
          description: "Spanish: 3/5 level",
        },
      ],
    },
    {
      title: "Education",
      innerHtml:
        "<p>Edgemony Frontend Bootcamp / <br>scholarship winner / 2021-2022 </p> <br> <p>Erasmus traineeship in Valencia / <br> Web designer at Mobike Shop / 2020</p> <br> <p>Traineeship / Graphic designer<br> at Alias Communication & Design / 2019 </p><br><p>Graphic design and corporate communication Master’s Degree / Academy of Fine Arts / 2019</p><br><p>Graphic design and <br>corporate communication Degree / Academy of Fine Arts / 2016</p>",
    },
    {
      title: "Work Experiences",
      innerHtml:
        "<p>Web Designer @Alkantara Fest / Design and annual restyling, maintenance of the wordpress site / <br>April 2022 > Current</p><br><p>Front-end Developer @RWS Digital / UI development with Next.js, Angular / working in team / <br>April 2022 > August 2023</p><br><p>Front-end Developer @Edgemony Coding Bootcamp / development of a web app mobile first / working in team with agile methodology / <br>February 2022 </p><br><p> Web and graphic designer @Mobike Shop Valencia / <br>March 2020 > July 2020 </p><br><p>Web and graphic designer @Kidimpro, performative practice for families / <br>March > September 2019</p>",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.cardsContainer}>
        {cardArr &&
          cardArr.map((card, indx) => (
            <Card
              key={indx}
              title={card.title}
              imgs={card.imgsArr}
              text={card.text}
              innerHtml={card.innerHtml}
              edu={card.edu}
              className={styles.card}
            />
          ))}
      </div>
      <ContactSticky />
    </>
  );
}
