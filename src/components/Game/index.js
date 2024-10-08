import React, { useState } from "react";

import {QRCodeSVG} from 'qrcode.react';
import QuestionScreen from "../QuestionScreen";
import MobileScreen from "../MobileScreen";
import "./index.css"

const Game = () => {
  const [players, setPlayers] = useState([]);
  const[status,setStatus]=useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks,setmarks]=useState(0)
  const [answers, setAnswers] = useState({});
  const [gameState, setGameState] = useState("waiting");
  

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["A. Paris", "B. Rome", "C. Berlin", "D. Madrid"],
      answer: "A"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["A. Newton", "B. Einstein", "C. Galileo", "D. Hawking"],
      answer: "B"
    },
    {
      question: "How many dots appear on a pair of dice?",
      options: ["A. 43", "B. 42", "C. 44", "D. 41"],
      answer: "B"
    },
    {
      question: "What is the 4th letter of the Greek alphabet?",
      options: ["A. Gamma", "B. Alpha", "C. Delta", "D. Omega"],
      answer: "C"
    },
    {
      question: "What is acrophobia a fear of?",
      options: ["A.  Heights", "B. Sky", "C. Water", "D. Ghost"],
      answer: "A"
    }
  ];

  

  const handlePlayerJoin = (name) => {
    setPlayers((prev) => [...prev, name]);
  };
  console.log(marks)

  const handleAnswerSubmit = (player, answer) => {
    setAnswers((prev) => ({ ...prev, [player]: answer }));

    if (answer === questions[currentQuestion].answer) {

      setmarks(prev=>prev+1)
      alert(`Congrats ${player} answered correctly!`);

      
     const timerid= setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1);
      }, 2000);
      if(questions.length-1===currentQuestion){

        clearInterval(timerid)
        setStatus(true)
        

      }
    } else {
      alert(`${player}, wrong answer!`);
      setmarks(prev=>prev-1)
    }
  };
  
  return (
    <div className="App">
      {status?<h1>Congrats {[...players]} got {marks} marks</h1>:<h1>Quiz Game by Sai Yashwanth!</h1>}
      
      {gameState === "waiting" && (
        <>
          <p>Scan the QR code to join the game:</p>
          <QRCodeSVG 
    value={"https://quizgame-kappa.vercel.app/"}
    title={"Title for my QR Code"}
    size={128}
    bgColor={"#ffffff"}
    fgColor={"#000000"}
    level={"L"}
    marginSize={0}
    imageSettings={{
      src: "https://static.zpao.com/favicon.png",
      x: undefined,
      y: undefined,
      height: 24,
      width: 24,
      opacity: 1,
      excavate: true,
    }}
  />
          <p>Players joined: {players.join(", ")}</p>
        </>
      )}
      {status?<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Game is Over!</h1>
        <a href="https://quizgame-kappa.vercel.app/">Play again</a>
      </div>:<>{gameState === "playing" && (
        <QuestionScreen
          currentQuestion={questions[currentQuestion]}
          players={players}
        />
      )}
      <MobileScreen
        onPlayerJoin={handlePlayerJoin}
        onAnswerSubmit={handleAnswerSubmit}
        currentQuestion={questions[currentQuestion]}
      /></>}
    </div>
  );
};

export default Game;
