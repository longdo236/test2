import { state, getData } from "./helpFunc.js";
const main = document.querySelector(".main");

const showData = async () => {
  await getData();

  state.results.map((rel) => {
    const markup = `
    <div class="question" >
   <h2 class="title question-title">Questions ${rel.id}</h2>
   <p class="title category">Category: ${rel.category}</p>
   <p class="title type">Type: ${rel.type}</p>
   <p class="title">Difficulty: ${rel.difficulty}</p>
   <p class="title">Question: ${rel.question}</p>
   <form class="choose">
    ${rel.incorrectAnswer.map((each) => {
      return `
     <input class="btn-quiz" type="radio" name="question_01" value="false"> ${each}<br>
     `;
    })}
    <input class="btn-quiz" type="radio" name="question_01" value="true"> ${
      rel.correctAnswer
    }<br>
   </form>
   <p class="title">Correct Answer: ${rel.correctAnswer}</p>
   <p class="title">Incorect Answer: ${rel.incorrectAnswer}</p>
   </div>
   `;
    main.insertAdjacentHTML("afterbegin", markup);
  });
};

showData();