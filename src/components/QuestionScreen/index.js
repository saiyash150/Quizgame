import React from "react";

const QuestionScreen = ({ currentQuestion, players }) => {
  return (
    <div className="question-screen">
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option, idx) => (
          <div key={idx}>{option}</div>
        ))}
      </div>
      <h3>Players: {players.join(", ")}</h3>
    </div>
  );
};

export default QuestionScreen;
