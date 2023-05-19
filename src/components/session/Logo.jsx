const logo = require('../../assets/images/logo.png');

const Logo = () => (
  <div className="logo d-flex flex-column justify-content-center">
    <img src={logo} alt="logo" className="logo-img" />
    <h3><strong>Restaurant Table Reservation</strong></h3>
  </div>
);

export default Logo;
