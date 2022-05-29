import PropTypes from 'prop-types';

export default function Board({ articles }) {
  return (
    <ul>
      {articles.map(({ id, title, author }) => (
        <li key={id}>
          {id} | {title} | {author}
        </li>
      ))}
    </ul>
  );
}

Board.propTypes = {
  articles: PropTypes.array,
};
