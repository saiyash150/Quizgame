import React, { useState } from "react";

const MobileScreen = ({ onPlayerJoin, onAnswerSubmit, currentQuestion }) => {
  const [playerName, setPlayerName] = useState("");
  const [hasJoined, setHasJoined] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleJoin = () => {
    if (playerName) {
      onPlayerJoin(playerName);
      setHasJoined(true);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswerSubmit(playerName, selectedAnswer);
    }
  };

  return (
    <div className="mobile-screen">
      {!hasJoined ? (
        <div>
          <h2>Enter your name to join:</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleJoin}>Join</button>
        </div>
      ) : (
        <div>
          <h2>Question: {currentQuestion.question}</h2>
          <div>
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedAnswer(option[0])}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  );
};

export default MobileScreen;