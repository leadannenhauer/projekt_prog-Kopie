<script>
  import { push } from "svelte-spa-router";
  export let question;
  import { activeQuestion, currentFeedback, score } from "../store";
  // console.log(questions);

  function clickHandler(index) {
    if (question.correct === index) {
      console.log("Correct");
      score.set($score + 1);
      $activeQuestion++;
      currentFeedback.set("Richtig! Du bist sooo gut!");
    } else {
      console.log("Wrong");
      currentFeedback.set("Leider Falsch! Versuche es beim nächsten Mal.");
      $activeQuestion++;
    }
    if ($activeQuestion === 4) {
      push("/result");
    }
  }
</script>

<div class="question-container">
  <h2>{question.question}</h2>
  <ul class="answer-wrapper">
    {#each question.options as option, index}
      <li class="answer-button" on:click={() => clickHandler(index)}>
        {option.name}
      </li>
    {/each}
  </ul>
</div>

<style>
  .question-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 5px 0;
  }

  .answer-button {
    background-color: rgb(255, 255, 233);
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    color: rgb(129, 0, 199);
  }

  .answer-button:hover {
    background-color: rgb(255, 199, 109);
  }

  .answer-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  @media (max-width: 600px) {
    .answer-button {
      padding: 8px;
    }
  }
</style>
