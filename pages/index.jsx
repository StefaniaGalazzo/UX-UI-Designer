import '@/app/page.module.scss'
import '@/app/global.scss'

import MainComp from '@/app/_components/UI/MainComp/MainComp'
import Head from 'next/head'
import ContactSticky from '@/app/_components/atoms/ContactSticky/ContactSticky'
import Footer from '@/app/_components/UI/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Frontend developer || UX/UI Designer'></meta>
        <title>Stefania Galazzo | Frontend Developer</title>
        <link rel='icon' type='image/x-icon' href='/favicon.ico'></link>
      </Head>
      <ContactSticky />
      <main>
        <MainComp />
      </main>
      <Footer />
    </>
  )
}
