import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

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

  return (
    <div className="meme--container">
      <div className="meme--form">
        <input
          className="meme--first_text"
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="meme--second_text"
          type="text"
          placeholder="Bottom text"
        ></input>
        <button className="meme--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className="meme--image" src={meme.memeImage} />
    </div>
  );
}
