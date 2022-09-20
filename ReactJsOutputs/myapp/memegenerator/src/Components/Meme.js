import React, { useState } from "react";
import memesData from "./../memesData";

const Meme = () => {
  const [newImageUrl, setnewImageUrl] = useState(
    "http://i.imgflip.com/1bij.jpg"
  );
  const [topText, settopText] = useState("");
  const [bottomText, setbottomText] = useState("");
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

  const textHandler1 = (e) => {
    settopText(e.target.value);
    console.log(topText);
  };

  const textHandler2 = (e) => {
    setbottomText(e.target.value);
    console.log(bottomText);
  };

  const getNewMeme = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * allMemeImages.length);
    setnewImageUrl(allMemeImages[randomIndex].url);
  };

  const meme = {
    topText: topText,
    bottomText: bottomText,
    randomImage: newImageUrl,
  };
  console.log(meme);

  return (
    <main>
      <form>
        <input
          id="11"
          className="form--input"
          type="text"
          placeholder="Top text"
          onChange={textHandler1}
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom text"
          onChange={textHandler2}
        ></input>
        <img className="meme-image" src={newImageUrl} alt=""></img>
        <button className="form--button" onClick={getNewMeme}>
          Get a new meme image
        </button>
      </form>
    </main>
  );
};

export default Meme;
