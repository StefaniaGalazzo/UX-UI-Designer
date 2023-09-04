import "@/app/page.module.scss";
import "@/app/global.scss";

import MainComp from "@/app/_components/UI/MainComp/MainComp";
import Head from "next/head";
import ContactSticky from "@/app/_components/atoms/ContactSticky/ContactSticky";
import Footer from "@/app/_components/UI/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sviluppo e manutenzione di Interfacce Utente e User Experience - UX/UI developing - UI Design"
        ></meta>
        <meta charset="UTF-8" />
        <title>Stefania Galazzo Ui Designer</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <ContactSticky />
      <main>
        <MainComp />
      </main>
      <Footer />
    </>
  );
}
