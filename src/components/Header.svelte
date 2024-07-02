<script>
  import { push } from "svelte-spa-router";
  function goToTest() {
    push("/vokabeltest");
  }
</script>

<header class="header">
  <div class="header-content">
    <h1>Vokabeltrainer</h1>
    <div class="header-buttons">
      <button on:click={goToTest}>Zum Test</button>
      <!-- Weitere Buttons falls nötig -->
    </div>
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%; /* Ensure the header content takes full width */
  }

  .header-buttons {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #45a049;
  }

  @media (max-width: 600px) {
    .header-content {
      flex-direction: column;
      align-items: flex-start; /* Align items to the start */
      gap: 10px; /* Reduce gap size for smaller screens */
    }

    .header-buttons {
      flex-direction: column; /* Stack buttons vertically */
      width: 100%; /* Ensure buttons take full width */
    }

    button {
      width: 100%; /* Ensure buttons take full width */
      padding: 10px; /* Adjust padding for smaller screens */
      font-size: 14px; /* Adjust font size for smaller screens */
    }
  }
</style>
