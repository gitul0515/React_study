import PropTypes from 'prop-types';

function Paragraph({ children, fontSize = 16, color = 'black' }) {
  return <p style={{ fontSize, color }}>{children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
};

export default Paragraph;
