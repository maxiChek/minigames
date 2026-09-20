import { createHeader } from '../components/header/header';
import '../components/header/header.scss';
import { createHomePage } from '../pages/home/home-page';
import '../pages/home/home-page.scss';
import '../components/leaderboard/leaderboard.scss';

export function initRouter(): void {
  const app = document.querySelector<HTMLDivElement>('#app')!;

  app.append(createHeader(), createHomePage());
}
