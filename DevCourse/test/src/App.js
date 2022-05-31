import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Upload from './components/Upload/Upload';

// ToDo
// import NewTaskForm from './components/Todo/NewTaskForm';
// import TaskList from './components/Todo/TaskList';
// import Header from './components/Todo/Header';
// import TaskProvider from './contexts/TaskProvider';

// const Container = styled.div`
//   width: 400px;
//   margin: 0 auto;
// `;

// function App() {
//   return (
//     <TaskProvider>
//       <Container>
//         <Header>ToDo</Header>
//         <NewTaskForm />
//         <TaskList />
//       </Container>
//     </TaskProvider>
//   );
// }

// Upload
// function App() {
//   return (
//     <Upload droppable>
//       {(file, dragging) => (
//         <div
//           style={{
//             width: 300,
//             height: 100,
//             border: '4px dashed #aaa',
//             borderColor: dragging ? 'black' : '#aaa',
//           }}
//         >
//           {file ? file.name : 'Click or drag file to this area to upload.'}
//         </div>
//       )}
//     </Upload>
//   );
// }

// Search
// import Header from './components/Search/Header';
// import SearchBox from './components/Search/SearchBox';
// import EmojiList from './components/Search/EmojiList';
// import emojiJson from './components/Search/emoji.json';

// const Container = styled.div`
//   width: 70%;
//   margin: 0 auto;
// `;

// function App() {
//   const [keyword, setKeyword] = useState('');
//   return (
//     <Container>
//       <Header />
//       <SearchBox onSearch={setKeyword} />
//       <EmojiList emojies={emojiJson} keyword={keyword} />
//     </Container>
//   );
// }

// Image
// import Image from './components/Image/Image';

// function App() {
//   return (
//     <div>
//       {Array.from(new Array(20), (_, i) => i).map((i) => (
//         <Image key={i} lazy block src={`https://picsum.photos/200?${i}`} />
//       ))}
//     </div>
//   );
// }

// Avatar
// import Avatar from './components/Avatar/Avatar';

// function App() {
//   return (
//     <Avatar.Group>
//       <Avatar src="https://picsum.photos/200?1" />;
//       <Avatar src="https://picsum.photos/200?2" />;
//       <Avatar src="https://picsum.photos/200?3" />;
//       <Avatar src="https://picsum.photos/200?4" />;
//     </Avatar.Group>
//   );
// }

// Slider
// import Slider from './components/Slider/Slider';

// const Div = styled.div`
//   width: 70%;
//   margin: 0 auto;
// `;

// function App() {
//   return (
//     <Div>
//       <Slider />
//     </Div>
//   );
// }

// Progress
import Progress from './components/Progress/Progress';

function App() {
  const [value, setValue] = useState(20);

  const handleIncreaseValue = useCallback(() => {
    if (value < 100) {
      setValue(value + 5);
    }
  }, [value]);

  const handleDecreaseValue = useCallback(() => {
    if (value > 0) {
      setValue(value - 5);
    }
  }, [value]);

  return (
    <div>
      <button type="button" onClick={handleIncreaseValue}>
        increase
      </button>
      <button type="button" onClick={handleDecreaseValue}>
        decrease
      </button>
      <Progress value={value} />
    </div>
  );
}

export default App;
