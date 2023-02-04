import React from 'react';
import './Info.scss';


function Info() {

  return (
    <div id="info">
      <h1>Hello there! 👋</h1>
      <p>
        My name is Finn. I have been coding for about 5 months. I've been learning React since Christmas and looking at Typescript in the last few days. Woohoo! 🐣
      </p>
      <p>
        But although I'm a rookie, I have never been so excited about learning. It's been a pretty life-changing process actually. I am dicovering more everyday and having a great time as I go. I especially love functional programming and trying to write elegant logic with Javascript! 🪄
      </p>
      <p>
        I would love to meet for an interview if you think I might be a good fit for the internship. However, I'm sure there will be some great programmers applying, and to be honest, I would be very grateful just to get some feedback on my code. 🙇‍♂️
      </p>
      <h2>Thank you 😊</h2>

      <p>
        <em>P.S: I used to work for Wolt back in 2020 - Greetings to Marvin and Chris!</em>
      </p>
      <div id="image_container">
        <img src="https://avatars.githubusercontent.com/u/114495682?s=400&u=5783c5b3cf5432e8118558cbd87292459dd232dc&v=4" id="me" alt="a silly bandana"></img>
        <a href="https://www.linkedin.com/in/finnianj/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default Info;
