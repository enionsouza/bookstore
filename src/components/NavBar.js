import { NavLink } from 'react-router-dom';
import userIcon from '../styles/img/user-icon.svg';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <header className="flex align-items-center space-between">
      <nav className="panel-bg flex align-items-center">
        <h1 className="Text-Style-5 width-15">Bookstore CMS</h1>
        <ul className="nav-menu-list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="Text-Style-7"
                activeClassName="active-link"
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="Oval">
        <img src={userIcon} alt="" className="Mask" />
      </div>
    </header>
  );
};

export default NavBar;
