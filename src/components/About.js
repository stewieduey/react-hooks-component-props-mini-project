import React from "react";

//the link is broken
const About = ({ image = "https://via.placeholder.com/215", about }) => {
    return (
        <aside>
        <img src={image} alt="blog logo" title= "blog logo" />
        <p>{ about }</p>
        </aside>
    );
};

export default About;