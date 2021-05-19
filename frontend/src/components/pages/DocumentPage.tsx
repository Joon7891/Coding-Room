import "./DocumentPage.css";
import React, { useState, useCallback } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import Document from "../Document";

import { Input } from "antd";
const { TextArea } = Input;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  background-color: green;
`;

const MainColumn = styled.div`
  width: 100%;
`;

function DocumentPage() {
  const { uid } = useParams<{ uid: string }>();

  return (
    <MainContainer>
      <Document></Document>
    </MainContainer>
  );
}

export default DocumentPage;
