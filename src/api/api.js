const questions = [
  {
    question: "Who am I?",
    choices: ["Henk", "Piet", "Bouwe"],
    answer: "Bouwe"
  }
];

export function getQuestion() {
  return questions[0];
}
