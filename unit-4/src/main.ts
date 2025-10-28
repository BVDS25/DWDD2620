import '../css/styles.css'; // ← Fix 1: Correct path to your Tailwind CSS
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen bg-theme-bg text-theme-text p-8">
    <div class="flex gap-8 mb-8">
      <a href="https://vite.dev" target="_blank" rel="noopener">
  <!-- <img src="vite.svg" class="logo w-24 h-24" alt="Vite logo" /> -->
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">
  <!-- <img src="typescript.svg" class="logo vanilla w-24 h-24" alt="TypeScript logo" /> -->
      </a>
    </div>

    <h1 class="text-4xl font-bold mb-8 text-theme-primary">Vite + TypeScript</h1>

    <div class="card w-80">
      <button id="counter" type="button" class="w-full p-4 text-left"></button>
    </div>

    <p class="read-the-docs mt-6 text-center text-gray-500">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);