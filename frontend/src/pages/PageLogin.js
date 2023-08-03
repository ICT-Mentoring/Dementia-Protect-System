import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "../style/PageLogin.css";

function PageLogin() {
  return (
    <div className="login">
      <Helmet>
        <title>로그인 | 치매노인 보호 시스템</title>
      </Helmet>
      <h1>로그인 페이지</h1>
        <div className="form">
          <label>아이디</label>
          <br /><br />
          <input type="text" className={styles.user_id} required placeholder="ID" />
          <br />
          <br />
          <label>비밀번호</label>
          <br /><br />
          <input type="password" className={styles.user_pw} required placeholder="PASSWORD" />
          <br /><br />
          <button>Login</button>
        </div>
    </div>
  );
}

export default PageLogin;