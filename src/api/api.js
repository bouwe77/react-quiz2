const questions = [
  {
    question: "Who am I?",
    choices: [
      { id: 1, answer: "Henk" },
      { id: 2, answer: "Piet" },
      { id: 3, answer: "Bouwe" }
    ],
    answer: 3
  }
];

export function getQuestion() {
  return questions[0];
}
