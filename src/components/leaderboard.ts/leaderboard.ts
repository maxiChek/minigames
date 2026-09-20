// Leaderboard is rendered as part of the Home page.
// This component remains available for later extraction into a reusable feature.
export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';
  return section;
}
