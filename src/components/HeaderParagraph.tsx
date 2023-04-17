import React from "react";

const HeaderParagraph = ({ headerOne, headerTwo, paragrapgh }) => {
  return (
    <div className="header-para">
      <h3>
        <span>{headerOne}&nbsp;</span>
        <span>{headerTwo}</span>
      </h3>
      <p>{paragrapgh}</p>
    </div>
  );
};

export default HeaderParagraph;
