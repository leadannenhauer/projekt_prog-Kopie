<script>
  import QuizQuestion from "./QuizQuestion.svelte";
  import { score, activeQuestion, currentFeedback } from "../store";
  import { onMount } from "svelte";

  let data = [];

  // Function to fetch API data
  const fetchApi = async () => {
    const response = await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies?filter[]=bodyType,eq,Planet"
    );
    const data = await response.json();
    return data.bodies;
  };

  onMount(async () => {
    const planetData = await fetchApi();
    data = planetData;
    console.log(data);
    generateQuestions();
  });

  // Define question patterns for different properties
  const questionPatterns = [
    {
      wording: " hat den größten Durchmesser",
      key: "meanRadius",
    },
    {
      wording: "ist der Erdnächste",
      key: "semimajorAxis",
    },
    {
      wording: "ist der wärmste",
      key: "avgTemp",
    },
    {
      wording: "hat die höchste Dichte",
      key: "density",
    },
  ];

  let questions = [];

  // Function to generate a question based on a given pattern
  function generateQuestion(pattern) {
    const availablePlanets = [...data]; // Create a copy of the planet data to modify
    const randomElements = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * availablePlanets.length);
      randomElements.push(availablePlanets[randomIndex]);
      availablePlanets.splice(randomIndex, 1); // Remove the selected planet from the available planets
    }

    const maxIndex = randomElements.reduce(
      (maxIndex, element, currentIndex) => {
        if (element[pattern.key] > randomElements[maxIndex][pattern.key]) {
          return currentIndex;
        } else {
          return maxIndex;
        }
      },
      0
    );

    return {
      question: `Welcher Planet ${pattern.wording} der folgenden Planeten?`,
      options: randomElements.map((planet) => ({
        name: planet.englishName, // Adjusted to use the correct property for planet name
        value: planet[pattern.key],
      })),
      correct: maxIndex,
    };
  }

  // Function to generate multiple questions with different patterns
  function generateQuestions() {
    questions = [];
    for (let i = 0; i < 5; i++) {
      const randomPatternIndex = Math.floor(
        Math.random() * questionPatterns.length
      );
      questions.push(generateQuestion(questionPatterns[randomPatternIndex]));
    }
    console.log(questions);
  }
</script>

<div class="Punktestand">
  <p>Frage {$activeQuestion + 1} von {questions.length - 1}</p>
  <p>Du hast {$score} Punkte!</p>
</div>

<div class="quiz-container">
  <div class="quiz-card">
    {#if questions.length > 0}
      <QuizQuestion question={questions[$activeQuestion]} />
    {/if}
  </div>
  <p>{$currentFeedback}</p>
</div>

<style>
  .Punktestand {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
  }
  .quiz-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    text-align: center;
  }

  .quiz-card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(129, 0, 199);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    padding: 80px;
    color: white;
    border: 6px solid rgb(251, 169, 38);
  }

  @media (max-width: 600px) {
    .score-and-question {
      font-size: 12px; /* Kleinere Schriftgröße für mobile Geräte */
      padding: 5px 10px; /* Weniger Padding für mobile Geräte */
    }

    .quiz-card {
      padding: 20px; /* Weniger Padding für mobile Geräte */
    }
  }
</style>
