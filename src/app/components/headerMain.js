import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, isClosed] = useState();

  return (
    <header>
      <Hamburger
        color="red"
        toggled={isOpen}
        toggle={isClosed}
        duration={0.8}
        label="Show menu"
      />
      {isOpen ? (
        <ul>

          <li>
            {' '}
            <img src="dasdasddasda" alt="20px" />
            {' '}
            2015
          </li>
          <li>most views</li>
          <li>
            <img src="dasdasddasda" alt="20px" />
            {' '}
            <img src="dasdasddasda" alt="20px" />
          </li>

        </ul>
      ) : null}

    </header>

  );
};
export default Header;
