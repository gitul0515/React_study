import React from 'react';
import styled from '@emotion/styled';
import EmojiListItem from './EmojiListItem';

const List = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojies }) => {
  return (
    <List>
      {emojies.map((emoji) => (
        <EmojiListItem key={emoji.title} emoji={emoji} />
      ))}
    </List>
  );
};

export default EmojiList;
