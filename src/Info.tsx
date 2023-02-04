import React from 'react';
import './Info.scss';


function Info() {

  return (
    <div id="info">
      <h1>Hello there! 👋</h1>
      <p>
        My name is Finn. I have been coding for about 5 months, so it's all very new. I've been learning React since Christmas and looking at Typescript in the last couple days.🐣
      </p>
      <p>
        But although I'm a rookie, I have never been so excited about learning. It's been pretty life-changing actually - I know this is what I want to do. I especially love Javascript and writing cool functions! 🪄
      </p>
      <p>
        I'm sure there will be some great programmers applying, so to be honest, I would be very grateful just to get some feedback on my code if you have the time. 🙇‍♂️
      </p>
      <h2>Thank you 😊</h2>

      <p>
        <em>P.S: I used to work for Wolt back in 2020 - Greetings to Marvin and Chris!</em>
      </p>
      <div id="image_container">
        <img src="https://avatars.githubusercontent.com/u/114495682?s=400&u=5783c5b3cf5432e8118558cbd87292459dd232dc&v=4" id="me" alt="a silly bandana"></img>
      </div>
    </div>
  );
}

export default Info;
