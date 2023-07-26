import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PageUserInfo() {
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>{id} | 치매노인 보호 시스템</title>
      </Helmet>
      <h1>대상자 상세 페이지</h1>
      <h2>ID : {id}</h2>
    </div>
  );
}

export default PageUserInfo;
