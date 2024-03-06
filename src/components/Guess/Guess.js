import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, word }) {
  const lettersStatuses = word !== "" ? checkGuess(word, answer) : [];

  return (
    <>
      {lettersStatuses.length > 0
        ? lettersStatuses.map((entry) => (
            <span className={`cell ${entry.status}`} key={crypto.randomUUID()}>
              {entry.letter}
            </span>
          ))
        : range(5).map(() => (
            <span className="cell" key={crypto.randomUUID()} />
          ))}
      {}
    </>
  );
}

export default Guess;
