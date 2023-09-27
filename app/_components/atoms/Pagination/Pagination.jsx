import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Pagination.module.scss";

export default function Pagination({ page }) {
  const router = useRouter();
  const pages = ["/vurgmate", "/queers-app", "/roomatch"];
  const lastPage = pages[pages.length - 1];

  const next = () => {
    if (page <= 0) {
      //   setCurrentPage();
      //   router.pathname = currentPage;
      router.push(pages[page + 1]);
      console.log("yessssss");
      console.log("page", page);
      console.log("pages[page]", pages[page]);
      console.log("current", currentPage);
      //   console.log("pgs.lngth", pages.length);
      //   console.log("pgs index", pages[pages.length - 1]);
      //   console.log("last", lastPage);
      //   console.log("router", router.pathname);
    } else if (page[page] == lastPage) {
      // router.pathname = pages.length + 1;
      console.log("elseee");
    }
  };
  return (
    <div className={styles.btns}>
      {/* <button>prew</button> */}
      <button onClick={next}>next</button>
    </div>
  );
}
