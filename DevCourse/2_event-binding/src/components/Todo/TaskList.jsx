import React from 'react';
import styled from '@emotion/styled';
import Task from './Task';

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  margin-top: 16px;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;

function TaskList({ content, complete }) {
  return (
    <UnorderedList>
      <Task content={content} complete={complete} />
      <Task content={content} complete={complete} />
      <Task content={content} complete={complete} />
    </UnorderedList>
  );
}

export default TaskList;
