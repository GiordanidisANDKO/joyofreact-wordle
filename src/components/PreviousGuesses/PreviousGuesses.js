import React from "react";
import Guess from "../Guess/Guess";

function PreviousGuesses({ answer, previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map((word) => (
        <p className="guess" key={crypto.randomUUID()}>
          <Guess answer={answer} word={word} />
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
