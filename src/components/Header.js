import React from "react";
import img_troll from "../images/troll_face.svg";

export default function Header() {
  return (
    <nav>
      <div className="header--title_box">
        <img className="header--img" src={img_troll} />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <div className="header--course_box">React Course - Project 3</div>
    </nav>
  );
}
