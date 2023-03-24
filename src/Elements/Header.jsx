import logo from '../images/Logo.svg'

function Header() {
    return (
      <div className="Header">
            <img src={logo} alt="" className="logo" />
            <ul className="header-list">
                <li className="list-item">Home</li>
                <li className="list-item">Services</li>
                <li className="list-item">About</li>
                <li className="list-item">The Team</li>
                <li className="list-item">Pricing</li>
                <li className="list-item">Contact</li>
            </ul>
            <a  className="btn-login">Sign Up</a>
      </div>
    );
  }
  
  export default Header;
  