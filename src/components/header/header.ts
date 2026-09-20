export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="header__container">
      <a class="header__logo" href="#home" aria-label="MiniGames home">MiniGames</a>

      <nav class="header__nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#games">Library</a>
        <a href="#leaderboard">Tournaments</a>
        <a href="#developer">Community</a>
      </nav>

      <div class="header__actions">
        <button class="header__auth header__auth--login" type="button" data-auth="login">Log In</button>
        <button class="header__auth header__auth--signup" type="button" data-auth="signup">Sign Up</button>
      </div>

      <button class="header__burger" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="header__mobile-menu" aria-hidden="true">
      <button class="header__mobile-close" type="button" aria-label="Close menu">×</button>
      <nav aria-label="Mobile navigation">
        <a href="#home">Home</a>
        <a href="#games">Library</a>
        <a href="#leaderboard">Tournaments</a>
        <a href="#developer">Community</a>
      </nav>
      <div class="header__mobile-actions">
        <button type="button" data-auth="login">Log In</button>
        <button type="button" data-auth="signup">Sign Up</button>
      </div>
    </div>

    <dialog class="auth-dialog">
      <button class="auth-dialog__close" type="button" aria-label="Close">×</button>
      <p class="auth-dialog__eyebrow">MINIGAMES</p>
      <h2 class="auth-dialog__title">Welcome back!</h2>
      <form method="dialog">
        <label>
          Email
          <input type="email" required placeholder="you@example.com">
        </label>
        <label>
          Password
          <input type="password" required placeholder="••••••••">
        </label>
        <button class="auth-dialog__submit" value="submit" type="submit">Continue</button>
      </form>
    </dialog>
  `;

  const menu = header.querySelector<HTMLElement>('.header__mobile-menu')!;
  const burger = header.querySelector<HTMLButtonElement>('.header__burger')!;
  const close = header.querySelector<HTMLButtonElement>(
    '.header__mobile-close',
  )!;
  const dialog = header.querySelector<HTMLDialogElement>('.auth-dialog')!;
  const title = header.querySelector<HTMLElement>('.auth-dialog__title')!;

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  burger.addEventListener('click', () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  });

  close.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  const openAuth = (mode: string): void => {
    title.textContent =
      mode === 'signup' ? 'Create your account' : 'Welcome back!';
    dialog.showModal();
    closeMenu();
  };

  header
    .querySelectorAll<HTMLButtonElement>('[data-auth]')
    .forEach((button) => {
      button.addEventListener('click', () =>
        openAuth(button.dataset.auth ?? 'login'),
      );
    });

  header
    .querySelector<HTMLButtonElement>('.auth-dialog__close')!
    .addEventListener('click', () => {
      dialog.close();
    });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  return header;
}
