import React from "react";
import { sample } from "../../utils";
import { range } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initPreviousGuesses = range(NUM_OF_GUESSES_ALLOWED).map(() => "");
  const [previousGuesses, setPreviousGuesses] =
    React.useState(initPreviousGuesses);

  return (
    <>
      <PreviousGuesses answer={answer} previousGuesses={previousGuesses} />
      <GuessInput
        answer={answer}
        previousGuesses={previousGuesses}
        setPreviousGuesses={setPreviousGuesses}
      />
    </>
  );
}

export default Game;
