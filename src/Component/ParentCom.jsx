import React, { useState } from "react";
import Title from "./Title";
import BoxItem from "./BoxItem";
import DataInput from "./DataInput";

function ParentCom() {
  const [text, setText] = useState("");

  const countWords = (text) => {
    const trimmedText = text.trim("");
    console.log(text);
    if (trimmedText === "") {
      return 0;
    } else {
      const words = trimmedText.split(/\s+/);
      return words.length;
    }
  };

  const countLeter = (text) => {
    return text.replace(/\s/g, "").length;
  };

  const countParagraph = (text) => {
    const paragraphs = text.split(/\n/);
    return paragraphs.length;
  };

  const handleUpperCase = () => {
    const upperCaseText = text.toUpperCase();

    setText(upperCaseText);
  };

  const handleLowCase = () => {
    const lowCaseText = text.toLowerCase();

    setText(lowCaseText);
  };
  return (
    <div className="container">
      <div className="container_content">
        <Title />
        <BoxItem
          countWords={countWords}
          countLeter={countLeter}
          countParagraph={countParagraph}
          text={text}
        />
        <DataInput countWords={countWords} text={text} setText={setText} />
        <div className="button">
          <div>
            <button onClick={handleUpperCase}>Click to Uppercase</button>
          </div>
          <div>
            <button onClick={handleLowCase}>Click To Lowercase</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentCom;
