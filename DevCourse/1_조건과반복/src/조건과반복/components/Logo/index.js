import logo from './logo.svg';
import PropTypes from 'prop-types';

function Logo({ size = '400px' }) {
  return <img src={logo} className="App-logo" alt="logo" style={{ width: size, height: size }} />;
}

// Logo.defaultProps = {
//   size: '400px',
// };

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
