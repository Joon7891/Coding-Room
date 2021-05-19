import React, { useEffect, createRef, useState } from "react";
import styled from "styled-components";
import { readFile } from "../utility/fileManager";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeCanvas.css";

import { Input } from "antd";
const { TextArea } = Input;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
`;

// TO DO:
// - Cleanup file

/*
const KEY = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
};
*/

function CodeCanvas() {
  const [code, setCode] = useState("");

  const codeRef = createRef<HTMLTextAreaElement>();

  // Function to handle changes when the text input is changed
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // This should eventually be abstracted
    setCode(event.target.value);
    // Focus on text field
    codeRef.current?.focus();
  };

  // Setting up movement within the CodeCanvas
  useEffect(() => {
    const child = document.querySelector(".test");
  }, []);

  return (
    <MainContainer>
      <textarea onChange={onChange} ref={codeRef} />

      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        wrapLines
        showLineNumbers
        className="test"
      >
        {code}
      </SyntaxHighlighter>
      <Wrapper code={code}></Wrapper>
    </MainContainer>
  );
}

type WrapperProps = {
  code: string;
};

function Wrapper({ code }: WrapperProps) {
  // Called on every rerender
  useEffect(() => {
    console.log("Rerender");
  });

  return (
    <SyntaxHighlighter style={a11yDark} wrapLines showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
}

/*
function CodeCanvas() {
  const [code, setCode] = useState("");
  const inputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
    console.log(event.target.selectionStart);
    // console.log(event.target.value);
  };

  useEffect(() => {
    const highlightedCode = document.querySelector("pre > code");
    console.log(highlightedCode);

    // Creating cursor element to insert
    const cursor = document.createElement("span");
    cursor.className = "cursor";

    if (highlightedCode !== null && highlightedCode.childNodes.length > 0) {
      const index = highlightedCode.children.length - 1;

      console.log(
        "children",
        highlightedCode.childNodes,
        highlightedCode.children
      );
      let node = highlightedCode.children[0];
      node.innerHTML = `${node.textContent}${cursor.outerHTML}`;
      highlightedCode?.replaceChild(
        node as Node,
        highlightedCode.childNodes[0]
      );
    }

    return () => {};
  }, [code]);

  // Setting up sync for cursor position

  // Cursor position with update

  // Cursor position along with sync interval
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    const cursorSync = () => {
      const codeTextArea =
        document.querySelector<HTMLTextAreaElement>(".codeTextArea");
      console.log(codeTextArea);
      console.log("call");
    };

    console.log("Works here");
    const intervalID = setInterval(cursorSync, 500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // Stuff to do when cursor chagnes
  useEffect(() => {}, [cursor]);

  return (
    <MainContainer>
      <TextArea
        className="codeTextArea"
        onChange={inputChange}
        onInput={inputChange}
        rows={10}
        style={{ width: "100vw" }}
      ></TextArea>

      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {code}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {code}
      </SyntaxHighlighter>
      <span>
        <span className="cursorDisplay">
          a<span className="cursor" />n
        </span>
        b
      </span>
    </MainContainer>
  );
}
*/

export default CodeCanvas;
