'use client'

import ContactSticky from '@/app/_components/atoms/ContactSticky/ContactSticky'
import Card from '@/app/_components/organisms/Card/Card'
import Navbar from '@/app/_components/organisms/Navbar/Navbar'
import styles from '@/styles/pagesModules/skills.module.scss'

export default function skills() {
  const cardArr = [
    {
      title: 'Main Skills',
      imgsArr: [
        {
          src: '/assets/imgs/react.svg',
          alt: 'React.js',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/next.svg',
          alt: 'Next.js',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/sass.svg',
          alt: 'Sass preprocessor',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/three.svg',
          alt: 'three.js for React',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/git.svg',
          alt: 'git',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/github.svg',
          alt: 'github',
          description: '★★★☆☆',
        },
        {
          src: '/assets/imgs/js.svg',
          alt: 'Javascript',
          description: '★★☆☆☆',
        },
        {
          src: '/assets/imgs/ang.svg',
          alt: 'Angular',
          description: '★☆☆☆☆',
        },
      ],
    },
    {
      title: 'About',
      innerHtml:
        '<span>💘 Love team work</span><br><span>🔝Thrilled  to improve</span><br><span>🏋️‍♀️ Motivated by my passions</span><br><span>🎯Focused on creativity</span><br><span>🏄‍♀️ New experiences addicted</span><br><span>🥰 Inclusivity lover</span><br><span>🌍 Citizen of the world</span><br><span>💻 Remote friendly',
      btn: '/downloadcv',
    },
    {
      title: 'Other Skills',
      imgsArr: [
        {
          id: 0,
          src: '/assets/imgs/figma.svg',
          alt: 'Figma software',
          description: '★★★★★',
        },
        {
          id: 1,
          src: '/assets/imgs/xd.svg',
          alt: 'XD software',
          description: '★★★★☆',
        },
        {
          id: 2,
          src: '/assets/imgs/dora.png',
          alt: 'Dora AI',
          description: '★★★☆☆',
        },
        {
          id: 3,
          src: '/assets/imgs/html5.svg',
          alt: 'html5',
          description: '★★★★☆',
        },
        {
          id: 4,
          src: '/assets/imgs/css3.svg',
          alt: 'Cascading Style Sheets 3',
          description: '★★★★☆',
        },
        {
          id: 5,
          src: '/assets/imgs/illustrator.svg',
          alt: 'Illustrator software',
          description: '★★★★★',
        },
        {
          id: 6,
          src: '/assets/imgs/photoshop.svg',
          alt: 'Photoshop software',
          description: '★★★★☆',
        },
        {
          id: 7,
          src: '/assets/imgs/aftereffects.svg',
          alt: 'Aftereffect software',
          description: '★★★★★',
        },
      ],
    },
    {
      title: 'Languages Skills',
      imgsArr: [
        {
          src: '/assets/imgs/ita.svg',
          alt: 'Italian: native level',
          description: 'Native',
        },
        {
          src: '/assets/imgs/eng.svg',
          alt: '★★☆☆☆',
          description: '★★☆☆☆',
          // alt: "English: Compared B1",
          // description: "Compared B1",
        },
        {
          src: '/assets/imgs/esp.svg',
          alt: '★★☆☆☆',
          description: '★★☆☆☆',
          // alt: "Spanish: Compared B1",
          // description: "Compared B1",
        },
      ],
    },
    {
      title: 'Education',
      innerHtml:
        '<p>Edgemony Frontend Bootcamp / <br>scholarship winner / 2021-2022 </p> <br> <p>Erasmus traineeship in Valencia / <br> Web designer at Mobike Shop / 2020</p> <br> <p>Traineeship / Graphic designer<br> at Alias Communication & Design / 2019 </p><br><p>Graphic design and corporate communication Master’s Degree / Academy of Fine Arts / 2019</p><br><p>Graphic design and <br>corporate communication Degree / Academy of Fine Arts / 2016</p>',
    },
    {
      title: 'Work Experiences',
      innerHtml:
        '<p>Web Designer @Alkantara Fest / Design and annual restyling, maintenance of the wordpress site / <br>April 2022 > Current</p><br><p>Front-end Developer @RWS Digital / UI development with Next.js, Angular / working in team / <br>April 2022 > August 2023</p><br><p>Front-end Developer @Edgemony Coding Bootcamp / development of a web app mobile first / working in team with agile methodology / <br>February 2022 </p><br><p> Web and graphic designer @Mobike Shop Valencia / <br>March 2020 > July 2020 </p><br><p>Web and graphic designer @Kidimpro, performative practice for families / <br>March > September 2019</p>',
    },
  ]
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
              btn
            />
          ))}
      </div>
      <ContactSticky />
    </>
  )
}
