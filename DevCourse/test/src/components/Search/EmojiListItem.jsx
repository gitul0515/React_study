import React from 'react';
import styled from '@emotion/styled';
import PropType from 'prop-types';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Symbol = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Title = styled.div`
  width: 200px;
`;

const Keywords = styled.div`
  flex: 1;
`;

const EmojiListItem = ({ emoji }) => {
  const { symbol, title, keywords } = emoji;
  return (
    <ListItem onClick={() => navigator.clipboard.writeText(symbol)}>
      <Symbol>{symbol}</Symbol>
      <Title>{title}</Title>
      <Keywords>{keywords}</Keywords>
    </ListItem>
  );
};

EmojiListItem.propTypes = {
  emoji: PropType.shape.isRequired,
};

export default EmojiListItem;
