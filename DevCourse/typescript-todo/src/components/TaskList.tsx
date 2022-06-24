import styled from "@emotion/styled";
import { useTaskContext } from "../contexts/TaskProvider";
import Task from "./Task";

const TaskList = (props: any) => {
  const { tasks } = useTaskContext();

  return (
    <UnorderedList {...props}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          content={task.content}
          complete={task.complete}
        />
      ))}
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

export default TaskList;
