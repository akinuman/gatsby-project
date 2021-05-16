import React from "react";

export default function TextInfo({ aboutInfoText }) {
  const { title, stroke, p } = aboutInfoText;
  return (
    <div className="about-info">
      <>
        <div className="about-info-line">
          <div className="about-info-text">
            {title[0]} <span>{stroke}</span> {title[1]}
          </div>
        </div>
        <div className="about-info-line">
          <div className="about-info-text">{title[2]}</div>
        </div>
        <div className="about-info-line">
          <div className="about-info-text">{title[3]}</div>
        </div>
      </>
      <p>
        {p[0]}{" "}
        <span role="img" aria-label="computer game" style={{ fontSize: "2.5vw" }}>
          🕹️
        </span>
        {p[1]}{" "}
        <span role="img" aria-label="books" style={{ fontSize: "2.5vw" }}>
          📚
        </span>
        {p[2]}{" "}
        <span role="img" aria-label="contact" style={{ fontSize: "2.5vw" }}>
          
        </span>
      </p>
    </div>
  );
}
