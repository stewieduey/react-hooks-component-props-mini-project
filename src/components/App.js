import React from "react";
import blogData from "../data/blog.js";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";


console.log(blogData);

function App() {
  const { name, image, about, posts } = blogData;
  return (
    <div className="App">
      <Header name={name} />
      <About image={image.link} about={about} />
      <ArticleList posts={posts} />
      
    </div>
  );
}

export default App;
