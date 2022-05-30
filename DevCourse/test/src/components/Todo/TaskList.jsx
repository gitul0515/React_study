import React from 'react';
import styled from '@emotion/styled';
import Task from './Task';
import { useTasks } from '../contexts/TaskProvider';

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

function TaskList() {
  const { tasks } = useTasks();

  return (
    <UnorderedList>
      {tasks.map(({ id, content, complete }) => (
        <Task key={id} id={id} content={content} complete={complete} />
      ))}
    </UnorderedList>
  );
}

export default TaskList;
