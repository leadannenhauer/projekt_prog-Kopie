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
  <h1>Planeten Raten</h1>

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

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(41, 0, 63);
    color: white;
    padding: 40px 40px;
  }

  nav {
    display: flex;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
  }

  a {
    background-color: rgb (255, 255, 233);
    color: rgb(129, 0, 199);
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  a:hover {
    color: rgb(255, 199, 109);
  }

  @media (max-width: 600px) {
    header {
      flex-direction: column;
      align-items: flex-start;
    }

    nav {
      width: 100%;
    }

    ul {
      flex-direction: column;
      width: 100%;
      padding: 0;
      gap: 10px;
    }

    li {
      width: 100%;
    }

    a {
      display: block;
      width: auto;
      text-align: left;
    }
  }
</style>
