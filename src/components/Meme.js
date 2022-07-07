import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  const [text, setText] = React.useState({
    topText: "One does not simply",
    bottomText: "walk into Mordor",
  });

  function getMemeImage() {
    let memeList = allMemeImages.data.memes;
    let memeNumber = Math.floor(Math.random() * memeList.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        memeImage: memeList[memeNumber].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setText((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme--container">
      <div className="meme--form">
        <input
          className="meme--first_text"
          type="text"
          placeholder="Top text"
          name="topText"
          value={text.topText}
          onChange={handleChange}
        ></input>
        <input
          className="meme--second_text"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={text.bottomText}
          onChange={handleChange}
        ></input>
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme--image_container">
        <img className="meme--image" src={meme.memeImage} />
        <h2 className="meme--text top">{text.topText}</h2>
        <h2 className="meme--text bottom">{text.bottomText}</h2>
      </div>
    </div>
  );
}
