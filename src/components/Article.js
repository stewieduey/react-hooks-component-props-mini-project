import React from "react";
//import ArticleList from "./ArticleList";

const Article = ({ title, date = "January 1, 1970", preview, minutes}) => {
    //Emoji Riddle Attempt...conditional
    const getEmojiCount = (minutes) => {
        console.log(minutes)
        if (minutes < 30) {
          const coffeeCups = Math.ceil(minutes / 5);
          console.log(coffeeCups)
          return "☕️".repeat(coffeeCups);
        } else {
          const bento = Math.ceil(minutes / 10);
          return "🍱".repeat(bento);
        }   
      };
  console.log(minutes)
    const emojiCount = getEmojiCount(minutes);
    
  console.log (emojiCount);
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <p> {emojiCount} {minutes} minute read</p>
      </article>
    );
  };
  
  export default Article;