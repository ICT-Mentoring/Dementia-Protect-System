import React from "react";
import styles from "../style/PageMain.module.css";
import SideBar from "../components/SideBar";
import NaverMap from "../components/NaverMap";

function PageMain() {
  return (
    <div className={styles.container}>
      <NaverMap />
      <SideBar />
    </div>
  );
}

export default PageMain;
