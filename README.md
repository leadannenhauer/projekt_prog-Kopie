## What is this game about?

In dem Spiel Planeten Raten kann man spielerisch Fakten über die Planeten lernen.
Sobald man das Spiel gestartet hat, erscheint eine Karte mit einer Frage und 3 Antwortmöglichkeiten.
Eine davon ist richtig. Wenn man sich durch alle vie Fragen geklickt hat sieht man em Ende sienen Punktestand und hat dei Möglichkeit nochmal zu spielen. Falls das nicht der Fall ist kann man ganz einafach über die Navigationsbar wiedr zurück zur Startseite.

## Prozess

Angefangen habe ich mit einem Wireframe in Figma. Anschließend ging es im Studio Code weiter. Zuerst wurden verschiedene Components erstellt. Mit der Zeit kam erst der Header dann die Landingpage. Im nächsten Schritt der Router zur Quizpage.
Um die Fragen zu programmieren hatte ich eine planetData.js hochgeladen um auf Basis dieser Daten weiter zumachen. Nachdem Quiz.svelte zum Großteil Stand habe ich die API mit eingebunden. Hierfür habe ich die verwendet die ich bereits vom Unterricht kannte:
https://api.le-systeme-solaire.net/en/ . Gegen Ende habe ich noch dei Result.svelte Page hinzugefügt, die Auskunft über das Ergebnis gibt. Ganz am Ende habe ich alles mit css gestylet und zusätzlich einen media breakpoint hinzugefügt.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from "svelte/store";
export default writable(0);
```
