import React from "react";


function DataInput({ text, setText }) {
  const handleChange = (e) => {
    const valueInput = e.target.value;
    setText(valueInput);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        cols={30}
        rows={10}
        placeholder="Enter/Paste Your Text Here"
      />
    </div>
  );
}

export default DataInput;
