import React, { createRef, useEffect, useState } from "react";
import { gold } from "@ant-design/colors";
import styled from "styled-components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Input } from "antd";
import { Select } from "antd";
import { Switch } from "antd";

const { TextArea } = Input;
const { Option } = Select;

/*
  Styled Components
*/

const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const ControlContainer = styled.div`
  width: 100%;
  height: 10%;

  background-color: ${gold[4]};
`;

const CodeContainer = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: row;
`;

const CodeColumn = styled.div`
  width: 100%;
  overflow: scroll;

  pre {
    margin: 0 !important;
  }
`;

const TextAreaColumn = styled(TextArea)`
  width: 100% !important;
  height: 100% !important;
  resize: none;
`;

const DisplayCodeColumn = styled.div``;

function Document() {
  // Display state controls
  const [style, setStyle] = useState("...");
  const [language, setLanguage] = useState("none");
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const [wrapLines, setWrapLines] = useState(false);
  const [wrapLongLines, setWrapLongLines] = useState(false);

  // Code text content
  const [content, setContent] = useState("");

  const textAreaRef = createRef<HTMLTextAreaElement>();

  useEffect(() => {
    console.log(textAreaRef.current?.value);
  }, [textAreaRef]);

  // Callback function to update the content when the associated textarea changes
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <MainContainer>
      <ControlContainer>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Language"
          optionFilterProp="children"
          onChange={(value) => {
            if (value) setLanguage(value.toString());
          }}
          filterOption={(input, option) => {
            return (
              option !== undefined &&
              option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          <Option value="none">None</Option>
          <Option value="javascript">JavaScript</Option>
          <Option value="c">C</Option>
          <Option value="cpp">C++</Option>
          <Option value="csharp">C#</Option>
        </Select>
        <Switch onChange={setShowLineNumbers} />
      </ControlContainer>
      <CodeContainer>
        <CodeColumn>
          <TextAreaColumn onChange={onContentChange} />
        </CodeColumn>
        <CodeColumn>
          <SyntaxHighlighter
            language={language}
            showLineNumbers={showLineNumbers}
            style={a11yDark}
            wrapLines={wrapLines}
            wrapLongLines={setWrapLongLines}
          >
            {content}
          </SyntaxHighlighter>
        </CodeColumn>
      </CodeContainer>
    </MainContainer>
  );
}

export default Document;
