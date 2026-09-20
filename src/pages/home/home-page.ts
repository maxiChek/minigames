import { createLeaderboard } from '../../components/leaderboard/leaderboard';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');

  main.id = 'home';
  main.innerHTML = `
    <section class="home">
      <h1>MiniGames</h1>
      <p>Play classic games in your browser.</p>
    </section>
  `;

  main.append(createLeaderboard());

  return main;
}
