import '../styles/headerMain.css';
import back from '../../assets/back.png';
import gear from '../../assets/gear.png';
import mic from '../../assets/mic.png';

const Header = () => (
  <header className="headerMain">

    <ul className="ulHeaderMain">

      <li className="backText">
        <img className="iconosMain" src={back} alt="20px" />
        2022
      </li>
      <li className="headerTitle">Coins</li>
      <li className="micCon">
        <img className="iconosMain" src={mic} alt="20px" />
        {' '}
        <img className="iconosMain" src={gear} alt="20px" />
      </li>

    </ul>

  </header>

);
export default Header;
