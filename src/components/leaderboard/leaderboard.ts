const leaderboardData = [
  { rank: 1, player: 'Alex', score: 1250 },
  { rank: 2, player: 'Maria', score: 1180 },
  { rank: 3, player: 'John', score: 1095 },
  { rank: 4, player: 'Emma', score: 980 },
  { rank: 5, player: 'Daniel', score: 925 },
];

export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');

  section.className = 'leaderboard';
  section.setAttribute('aria-labelledby', 'leaderboard-title');

  section.innerHTML = `
    <div class="leaderboard__container">
      <h2 id="leaderboard-title">Leaderboard</h2>

      <table class="leaderboard__table">
        <caption class="visually-hidden">
          Top players and their scores
        </caption>

        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Player</th>
            <th scope="col">Score</th>
          </tr>
        </thead>

        <tbody>
          ${leaderboardData
            .map(
              ({ rank, player, score }) => `
                <tr>
                  <td>${rank}</td>
                  <td>${player}</td>
                  <td>${score}</td>
                </tr>
              `,
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;

  return section;
}
