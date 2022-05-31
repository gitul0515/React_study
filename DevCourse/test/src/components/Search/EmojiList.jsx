import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';
import EmojiListItem from './EmojiListItem';

const List = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojies, keyword }) => {
  return (
    <List>
      {emojies
        .filter((emoji) => emoji.keywords.includes(keyword))
        .slice(0, 10)
        .map((emoji) => (
          <EmojiListItem key={emoji.title} emoji={emoji} />
        ))}
    </List>
  );
};

EmojiList.propTypes = {
  emojies: PropType.arrayOf,
  keyword: PropType.string,
};

EmojiList.defaultProps = {
  emojies: [],
  keyword: '',
};

export default EmojiList;
