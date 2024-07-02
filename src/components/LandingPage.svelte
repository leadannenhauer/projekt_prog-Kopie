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
    <h2>Lernanwendung Planeten</h2>
    <p>
      Willkommen zum Planeten-Raten! Hier kannst du auf spielerische Weise dein
      Wissen über die Planeten in unserem Sonnensystem erweitern. Tauche ein in
      die Welt der Planeten und entdecke, wie viel Spaß das Lernen machen kann!
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
    flex: 1;
    display: flex;
    justify-content: center;
    width: 800px;
    height: 600px;
    padding: 40px;
  }

  .rocket-image img {
    max-width: 100%;
    height: auto;
  }

  .text-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    max-width: 600px;
    text-align: center;
    padding: 100px;
  }

  button {
    background-color: rgb(255, 255, 233);
    height: 50px;
    width: 200px;
    font-size: 20px;
    color: rgb(129, 0, 199);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-top: 40px;
  }

  button:hover {
    background-color: rgb(255, 199, 109);
  }

  @media (max-width: 600px) {
    .content-container {
      flex-direction: column;
      align-items: center;
    }

    .rocket-image {
      width: 70%;
    }

    .text-content {
      font-size: 16px;
      align-items: center;
      text-align: center;
    }

    button {
      font-size: 18px;
      height: 45px;
      width: 50%;
    }
  }
</style>
