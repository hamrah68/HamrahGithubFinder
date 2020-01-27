import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i style={{ padding: 10 }} className={icon}></i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>خانه</Link>
        </li>
        <li>
          <Link to='/about'>درباره ما</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'جستجو در گیت هاب',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired
};
export default Navbar;
