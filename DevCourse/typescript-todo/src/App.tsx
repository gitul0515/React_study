import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import TaskProvider from "./contexts/TaskProvider";
import TaskList from "./components/TaskList";
import styled from "@emotion/styled";

const App = () => {
  return (
    <TaskProvider>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{ marginTop: 16 }} />
      </Container>
    </TaskProvider>
  );
};

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export default App;
