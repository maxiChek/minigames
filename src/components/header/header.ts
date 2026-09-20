export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="header__container">
      <a class="header__logo" href="/">MiniGames</a>

      <nav class="header__nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#games">Games</a>
      </nav>
    </div>
  `;

  return header;
}
