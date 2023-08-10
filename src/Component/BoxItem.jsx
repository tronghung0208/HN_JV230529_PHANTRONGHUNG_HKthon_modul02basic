import React from "react";

function BoxItem({ countWords, countLeter, countParagraph, text }) {
  return (
    <div className="box-item">
      <div className="box_icon">
        <div>
          <i className="fa-regular fa-file-lines" />
          <span>Word</span>
          <p>{countWords(text)}</p>
        </div>
      </div>
      <div className="box_icon">
        <div>
          <i className="fa-solid fa-envelope" />
          <span> Letter</span>
          <p>{countLeter(text)}</p>
        </div>
      </div>
      <div className="box_icon">
        <div>
          <i className="fa-solid fa-outdent" /> <span>Paragraph</span>
          <p>{countParagraph(text)}</p>
        </div>
      </div>
    </div>
  );
}

export default BoxItem;
