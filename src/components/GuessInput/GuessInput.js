import React from "react";
import Banner from "../Banner/Banner";

function GuessInput({ answer, previousGuesses, setPreviousGuesses }) {
  const [guessInput, setGuessInput] = React.useState("");
  const [numberOfSubmissions, setNumberOfSubmissions] = React.useState(0);
  const [won, setWon] = React.useState(false);
  const [lost, setLost] = React.useState(false);

  function handleGuessInputChange(e) {
    const nextGuessInput = e.target.value.toUpperCase();
    setGuessInput(nextGuessInput);
  }

  function handleGuessInputFormSubmit(e) {
    e.preventDefault();
    setGuessInput("");

    const nextGuesses = [...previousGuesses];
    nextGuesses[numberOfSubmissions] = guessInput;
    setPreviousGuesses(nextGuesses);

    const nextNumberOfSubmissions = numberOfSubmissions + 1;
    setNumberOfSubmissions(nextNumberOfSubmissions);

    if (answer === guessInput) {
      setWon(true);
    }

    if (nextNumberOfSubmissions === 6) {
      setLost(true);
    }
  }

  return (
    <>
      {won && (
        <Banner
          message={`<strong>Congratulations!</strong> Got it in <strong>${numberOfSubmissions} guesses</strong>.`}
          mood="happy"
        />
      )}
      {lost && (
        <Banner
          message={`Sorry, the correct answer is <strong>${answer}</strong>.`}
          mood="sad"
        />
      )}
      <form
        className="guess-input-wrapper"
        onSubmit={handleGuessInputFormSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          onChange={handleGuessInputChange}
          pattern="[a-zA-Z]{5}"
          required={true}
          value={guessInput}
          type="text"
          disabled={won || lost}
        />
      </form>
    </>
  );
}

export default GuessInput;
