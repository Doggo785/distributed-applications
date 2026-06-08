import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <span className="header__icon">⚡</span>
        <span className="header__title">Panel Stack</span>
      </Link>
    </header>
  );
}

export default Header;
