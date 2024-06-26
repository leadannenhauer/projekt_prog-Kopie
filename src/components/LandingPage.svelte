<!-- <script>
  import { push } from "svelte-spa-router";
  function goToTest() {
    push("/vokabeltest");
  }
</script>

<p>Willkommen zum Planeten-Vokabeltrainer! Hier kannst du auf spielerische Weise dein Wissen über die Planeten in unserem Sonnensystem erweitern. Lerne die Namen, Eigenschaften und faszinierende Fakten über die Himmelskörper, die um unsere Sonne kreisen. Egal ob du ein angehender Astronom oder einfach nur neugierig bist, dieser Vokabeltrainer bietet eine unterhaltsame Möglichkeit, mehr über die Planeten zu erfahren. Tauche ein in die Welt der Planeten und entdecke, wie viel Spaß das Lernen machen kann!</p>

<div class="rocket-image">
  <img src="planet 2.png" alt="Planet" />
</div>

<button on:click={goToTest}>zum test</button>

<style>
  .img {
    width: 100%;
    height: 100%;
  }
  .rocket-image {
    display: flex;
    justify-content: left;
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
    background-color: rgb(255, 255, 255);
    height: 50px;
    width: 200px;

    font-size: 20px;
    color: black;
  }
</style> -->
<script>
  import { push } from "svelte-spa-router";
  function goToTest() {
    push("/vokabeltest");
  }
</script>

<div class="content-container">
  <div class="rocket-image">
    <img src="planet 2.png" alt="Planet" />
  </div>
  <div class="text-content">
    <p>
      Willkommen zum Planeten-Vokabeltrainer! Hier kannst du auf spielerische
      Weise dein Wissen über die Planeten in unserem Sonnensystem erweitern.
      Lerne die Namen, Eigenschaften und faszinierende Fakten über die
      Himmelskörper, die um unsere Sonne kreisen. Egal ob du ein angehender
      Astronom oder einfach nur neugierig bist, dieser Vokabeltrainer bietet
      eine unterhaltsame Möglichkeit, mehr über die Planeten zu erfahren. Tauche
      ein in die Welt der Planeten und entdecke, wie viel Spaß das Lernen machen
      kann!
    </p>
    <button on:click={goToTest}>Zum Test</button>
  </div>
</div>

<style>
  .content-container {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;
  }

  .rocket-image {
    flex-shrink: 0;
  }

  .rocket-image img {
    max-width: 100%;
    height: auto;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 200px;
  }

  button {
    background-color: rgb(255, 255, 255);
    height: 50px;
    width: 200px;
    font-size: 20px;
    color: black;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }

  button:hover {
    background-color: rgb(230, 230, 230);
  }
</style>
