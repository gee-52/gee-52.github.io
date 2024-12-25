import { useState } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (event) => {
    const menuItem = event.target.textContent;
    setActiveMenuItem(menuItem);
  };

  return (
    <>
      <header>
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          {navbarOpen ? '' : ''}
          &#2261;
        </button>
        <ul class="left">
          <li><a href="#"><h1>My Website</h1></a></li>
        </ul>
        <nav className={`navbar ${navbarOpen ? 'show-menu' : ''}`}>
          <ul class="right" className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            <li>
              <a href="#"
                className={activeMenuItem === 'Обо мне' ? 'js_active active' : 'js_active'}
                onClick={handleMenuItemClick}
              >Обо мне</a>
            </li>
            <li>
              <a href="#"
                className={activeMenuItem === 'Что я могу' ? 'js_active active' : 'js_active'}
                onClick={handleMenuItemClick}
              >Что я могу</a>
            </li>
            <li>
              <a href="#"
                className={activeMenuItem === 'Контакты' ? 'js_active active' : 'js_active'}
                onClick={handleMenuItemClick}
              >Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
