'use client'
import ButtonsShadow from '../../atoms/Buttons/ButtonsShadow'
import Circle from '../../atoms/Circle/Circle'
import ToTopBtn from '../../atoms/ToTopBtn/ToTopBtn'
import MailBtn from '../../organisms/MailBtn/MailBtn'
import Section from '../Section/Section'
import styles from './mainComp.module.scss'

export default function MainComp() {
  return (
    <>
      <div className={styles.main} id='top'>
        <Circle />
        <div className={styles.texts}>
          <h1 className={styles.description}>
            Hi! I{"'"}m a<span className={styles.enphasis}> Frontend developer </span>
            with strong <span className={styles.enphasis}>UI design</span> skill
          </h1>
          <h3>
            I’m passionate about creating digital experiences that matter. With a unique blend of UX/UI design expertise
            and frontend development skills, I bring ideas to life in ways that are both visually stunning and
            technically sound. I believe in the power of design and code to make a real impact, and I’m excited to bring
            that passion to your next project. Let’s make something unforgettable!
            {/* I love drawing and designing web applications with a strong visual
            impact. As UX/UI designer my main work is to investigate the User
            experience and derive an optimal design. Like Jr Frontend dev, I
            like to create the basic HTML, CSS and JS structure for the
            application to work using the most used libraries and frameworks. */}
            {/* <span> (React, Three, JS, GSAP, etc).</span> */}
          </h3>
          <div className={styles.cta}>
            <ToTopBtn href={'/#projects'} txt={'Projects'} toPosition />
            <ButtonsShadow txt={'Skills'} href={'/skills'} blank />
            <ButtonsShadow href='/assets/files/CV_StefaniaGalazzo-2025_portfoliolink.pdf' txt={`CV`} download />
            <ButtonsShadow href='/3D-&-more' txt={`3D & more`} blank />
            {/* <MailBtn /> */}
          </div>
        </div>
      </div>
      <div id='projects'></div>
      {/* TIMELUX */}
      {/* <Section
        id="prj-1"
        title={"Timelux"}
        subtitle={"Time is a luxury, take yours"}
        bodytext={
          "The project takes a luxury watch retailer brand Timelux as a case study to build a Ui Design following the design trends for a visual that rapresent all these luxury and prestige. In the moodboard, to understand the look and feel of the project, the most famous watch brand on the today market."
        }
        link={"/timelux"}
        cta={["Project >>", "Prototype >>"]}
        bckColor={"#000046"}
        txtColor={"#f0f7de"}
        img={"/assets/imgs/moodboard-timelux.png"}
        imgTitle={"Timelux moodboard"}
        gridTemplArea={"a b "}
        shadow={"#e6ffa2"}
        tags={[
          { tag: "UI Design" },
          { tag: "Brand Identity" },
          { tag: "Design System" },
          { tag: "Wirefrime" },
          { tag: "Responsive" },
        ]}
      /> */}
      <Section
        id='vurgmate'
        title={'Vurgmate'}
        subtitle={'Your best Vurger Experience'}
        bodytext={'Vurgmate is a food delivery app dedicated to vegan sandwiches lovers/addicted.'}
        cta={[{ title: '>> the project', link: '/vurgmate' }]}
        bckColor={'linear-gradient(-37deg, #147537 5%, #fcc3bc 69%)'}
        txtColor={'rgb(0, 86, 65)'}
        img={'/assets/imgs/vurgmate-mock-crop.png'}
        gridTemplArea={`"b a"`}
        tags={[
          { tag: 'UI Design' },
          { tag: 'UX Design' },
          { tag: 'Brand Identity' },
          { tag: 'Wirefrime' },
          { tag: 'Mobile First' },
          { tag: 'Figma' },
          // { tag: "UI Design", id: "/vurgmate/#ui" },
          // { tag: "UX Design", id: "/vurgmate/#ux" },
          // { tag: "Brand Identity", id: "/vurgmate/#brand" },
          // { tag: "Wirefrime", id: "/vurgmate/#wire" },
          // { tag: "Mobile First", id: "/vurgmate/#ui" },
          // { tag: "Figma", id: "/vurgmate/#ui" },
        ]}
      />
      <Section
        id='prj-2'
        title={'Queers app'}
        subtitle={'Find a safespace everywhere'}
        bodytext={
          'A mobile app that offers itself as a point of reference for the LGBTQ+ community, dedicated on the one hand to provide services, entertainment and products to users; on the other hand to help local associations to network in the area with collaborations and information, awareness-raising actions , training, support etc.'
        }
        cta={[
          // {
          //   title: "the prototype in HD wireframe",
          //   link: "https://xd.adobe.com/view/8ac780e6-119f-4e6d-b1a8-a186d38c7f41-df94/?fullscreen",
          //   blank: true,
          // },
          { title: '>> the project', link: '/queers-app' },
        ]}
        bckColor={'#fff6fe'}
        txtColor={'#dc6dd0'}
        img={'/assets/imgs/queers-mockup.png'}
        gridTemplArea={`"a b"`}
        shadow={'#4739de'}
        tags={[
          { tag: 'UI Design' },
          { tag: 'UX Design' },
          { tag: 'UX Personas' },
          { tag: 'UX interview' },
          { tag: 'Icon-set' },
          { tag: 'Wirefrime' },
          { tag: 'Prototype' },
          { tag: 'Adobe XD' },
        ]}
      />
      <Section
        id='prj-2'
        title={'Roomatch'}
        subtitle={'Find your perfect roomate!'}
        bodytext={`Tired of roomate horror stories? Welcome to RooMatch, a mobile first web app where you can find the perfect room at the perfect price with the perfect roommate!`}
        cta={[
          // { title: "the prototype", link: false },
          { title: '>> the project', link: '/roomatch' },
        ]}
        bckColor={'#e2eef6'}
        txtColor={'#a90097'}
        img={'/assets/imgs/mobile-mockup-roomatch.png'}
        gridTemplArea={`"b a"`}
        shadow={'#a90097'}
        tags={[{ tag: 'UI Design' }, { tag: 'Front-end' }, { tag: 'Mobile First' }, { tag: 'Inclusive UX' }]}
      />
      <section className={styles.comingsoon}>
        <h4>COMING SOON</h4>
        <h6>A progect that may change something in our lives</h6>
      </section>
      <ToTopBtn href={'/#top'} toTOP />
    </>
  )
}
