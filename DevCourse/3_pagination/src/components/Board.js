import PropTypes from 'prop-types';

const Board = ({ page, limit, articles }) => {
  const offset = page * limit;
  return (
    <ul>
      {articles.map(({ id, title }) => (
        <li key={id}>
          {id} | {title}
        </li>
      ))}
    </ul>
  );
};

Board.propTypes = {
  articles: PropTypes.array,
};

export default Board;
