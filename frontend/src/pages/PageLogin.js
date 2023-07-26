import React from "react";
import { Helmet } from "react-helmet-async";

function PageLogin() {
  return (
    <div>
      <Helmet>
        <title>로그인 | 치매노인 보호 시스템</title>
      </Helmet>
      <h1>로그인 페이지</h1>
      <div>
        <label>아이디</label>
        <br />
        <input />
        <br />
        <br />
        <label>비밀번호</label>
        <br />
        <input />
      </div>
    </div>
  );
}

export default PageLogin;
