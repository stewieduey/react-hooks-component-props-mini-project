import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
    console.log(posts);
    return (
        <main>
            {posts.map((post, index) => {
                console.log(post);
               return  <Article key={index} {...post} />
})}
        </main>
    );
};

export default ArticleList;