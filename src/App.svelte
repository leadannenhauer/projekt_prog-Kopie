<script>
  import Router from "svelte-spa-router";
  import LandingPage from "./components/LandingPage.svelte";
  import Quiz from "./components/Quiz.svelte";
  import Result from "./components/Result.svelte";
  // Remove the unused imports

  const routes = {
    "/": LandingPage,
    "/vokabeltest": Quiz,
    "/result": Result,
  };
</script>

<header>
  <h1>Planeten Page</h1>
  b njbuzvuzbiuzbvu
  <nav>
    <ul>
      <li><a href="/">Startseite</a></li>
      <li><a href="#/vokabeltest">Vokabeltest</a></li>
    </ul>
  </nav>
</header>

<main>
  <Router {routes} />
</main>

<footer></footer>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333; /* Hintergrundfarbe der Navbar */
    color: white;
    padding: 10px 20px;
  }

  nav {
    display: flex;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px; /* Abstand zwischen den Buttons */
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    background-color: #555; /* Hintergrundfarbe bei Hover */
  }
</style>
