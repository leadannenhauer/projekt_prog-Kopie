<script>
  import { push } from "svelte-spa-router";
  import { score, activeQuestion, currentFeedback } from "../store";

  function goToTest() {
    score.set(0); // Reset the score
    activeQuestion.set(0); // Reset the active question
    push("/vokabeltest");
    currentFeedback.set(""); // Reset the feedback
  }
</script>

<div class="container">
  <div class="card">
    <p>Du hast das Quiz abgeschlossen! Hier ist dein Ergebnis:</p>
    <p>{$score} von 4 Fragen richtig!</p>
    <button on:click={goToTest}>Nochmal spielen!</button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: black;
  }

  .card {
    background-color: rgb(255, 255, 233);
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    max-width: 400px;
    width: 100%;
  }

  button {
    background-color: rgb(255, 199, 109);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 20px auto 0 auto;
    cursor: pointer;
    border-radius: 8px;
  }

  button:hover {
    background-color: rgb(251, 169, 38);
  }
  @media (max-width: 600px) {
    .card {
      padding: 20px; /* Weniger Padding für mobile Geräte */
      width: 50%;
    }

    button {
      padding: 10px 20px; /* Weniger Padding für mobile Geräte */
      font-size: 14px; /* Kleinere Schriftgröße für mobile Geräte */
    }
  }
</style>
