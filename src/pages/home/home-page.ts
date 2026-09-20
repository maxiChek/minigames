const RAW_ASSET =
  'https://raw.githubusercontent.com/rolling-scopes-school/qualifying-stage/main/tasks/minigames/tasks/assets/images/games';

const games = [
  ['winter-burrow', 'Winter Burrow', '4.9', '32.4K'],
  ['vacation-cafe-simulator', 'Vacation Cafe Simulator', '4.8', '28.8K'],
  ['heartopia', 'Heartopia', '4.6', '46.8K'],
  ['tiny-glade', 'Tiny Glade', '4.9', '67.3K'],
];

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.id = 'home';

  main.innerHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__backdrop"></div>
      <div class="hero__container">
        <div class="hero__card">
          <p class="hero__eyebrow">MINIGAMES</p>
          <h1 id="hero-title">Take a Short Break &amp; Have Fun</h1>
          <p>Discover cozy games, compete with friends, and make every break a little more fun.</p>
          <a class="button button--primary" href="#games">Browse Library</a>
        </div>
      </div>
    </section>

    <section class="games" id="games" aria-labelledby="games-title">
      <div class="section-container">
        <div class="section-heading">
          <h2 class="section-title" id="games-title">New Games</h2>
          <div class="section-arrows" aria-hidden="true">
            <button type="button">←</button><button type="button">→</button>
          </div>
        </div>
        <div class="games__track">
          ${games
            .map(
              ([slug, name, rating, likes], index) => `
                <article class="game-card ${index === 1 ? 'game-card--featured' : ''}">
                  <img src="${RAW_ASSET}/${slug}-card.jpg" alt="${name}" />
                  <div class="game-card__info">
                    <h3>${name}</h3>
                    <span>★ ${rating}</span>
                    <span>♥ ${likes}</span>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="leaderboard" id="leaderboard" aria-labelledby="leaderboard-title">
      <div class="section-container">
        <h2 class="section-title" id="leaderboard-title">Top Players This Week</h2>
        <div class="leaderboard__table-wrap">
          <table>
            <thead>
              <tr><th>Rank</th><th>Player</th><th>Games Played</th><th>Total Score</th><th>Streak</th><th>Favorite Game</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Alex_Pro99</td><td>142</td><td>94,250</td><td>12 days</td><td>Heartopia</td></tr>
              <tr><td>2</td><td>CozyGamer_x</td><td>118</td><td>81,400</td><td>8 days</td><td>Cat Mail Co.</td></tr>
              <tr><td>3</td><td>MatchMaster</td><td>98</td><td>72,110</td><td>5 days</td><td>Tiny Glade</td></tr>
              <tr><td>4</td><td>BubblePop</td><td>87</td><td>65,900</td><td>3 days</td><td>Whisper of the House</td></tr>
              <tr><td>5</td><td>SudokuGod</td><td>74</td><td>59,320</td><td>2 days</td><td>Cat Chess</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="developer" id="developer" aria-labelledby="developer-title">
      <div class="section-container developer__grid">
        <div class="developer__art" aria-hidden="true">
          <div class="developer__orb"></div>
          <div class="developer__controller">🎮</div>
        </div>
        <div class="developer__card">
          <p class="hero__eyebrow">CREATE WITH US</p>
          <h2 id="developer-title">Are You a Game Developer?</h2>
          <p>Bring your game to MiniGames and let players discover something new. We love cozy, clever and creative games.</p>
          <button class="button button--primary" type="button">Submit Your Game</button>
          <p class="developer__contact">Questions? <a href="mailto:hello@minigames.example">Contact us</a></p>
        </div>
      </div>
    </section>
  `;

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__container">
      <div class="footer__brand">
        <a class="footer__logo" href="#home">MiniGames</a>
        <p>Short breaks. Cozy games. Good vibes.</p>
      </div>
      <div class="footer__links">
        <div><h3>Explore</h3><a href="#home">Home</a><a href="#games">Library</a><a href="#leaderboard">Tournaments</a></div>
        <div><h3>Company</h3><a href="#home">About</a><a href="#developer">For Developers</a><a href="#home">Contact</a></div>
        <div><h3>Community</h3><a href="#home">Discord</a><a href="#home">Instagram</a><a href="#home">X / Twitter</a></div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 MiniGames</span>
      <a href="https://rs.school/courses/short-track">RS School Short Track</a>
      <a href="https://github.com/maxiChek">Student GitHub</a>
    </div>
  `;

  main.append(footer);
  return main;
}
