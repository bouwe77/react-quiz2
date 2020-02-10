import React, { useState, useEffect } from "react";
import { getQuestion } from "./api/api";
import Choice from "./Choice";

export default () => {
  const [question, setQuestion] = useState({});
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState();

  useEffect(() => {
    const question = getQuestion();
    setQuestion(question);
  }, []);

  function choose(id) {
    const correct = id === question.answer;
    setIsCorrect(correct);
    setAnswered(true);
  }

  return (
    <>
      <h2>{question.question}</h2>
      <div>
        {question.choices &&
          question.choices.map(choice => (
            <Choice choice={choice} choose={choose} disabled={answered} />
          ))}
      </div>
      {answered ? isCorrect ? <div>JA!</div> : <div>NEE</div> : null}
    </>
  );
};
