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
// import Progress from './components/Progress/Progress';

// function App() {
//   const [value, setValue] = useState(20);

//   const handleIncreaseValue = useCallback(() => {
//     if (value < 100) {
//       setValue(value + 5);
//     }
//   }, [value]);

//   const handleDecreaseValue = useCallback(() => {
//     if (value > 0) {
//       setValue(value - 5);
//     }
//   }, [value]);

//   return (
//     <div>
//       <button type="button" onClick={handleIncreaseValue}>
//         increase
//       </button>
//       <button type="button" onClick={handleDecreaseValue}>
//         decrease
//       </button>
//       <Progress value={value} />
//     </div>
//   );
// }

// Skeleton
// import Skeleton from './components/Skeleton/Skeleton';
// function App() {
//   return (
//     <div>
//       <div style={{ float: 'left', marginRight: 16 }}>
//         <Skeleton.Box width={200} height={100} />
//       </div>
//       <div style={{ float: 'left', width: '80%' }}>
//         <Skeleton.Circle size={100} />
//       </div>
//       <Skeleton.Paragraph line={3} />
//     </div>
//   );
// }

// Input
// import Input from './components/Input/Input';

// function App() {
//   return <Input label="Label" placeholder="헬로우" />;
// }

// Select
// import Select from './components/Select/Select';

// function App() {
//   return (
//     <Select data={['Item 1', 'Item 2', { label: 'Item 3', value: 'value' }]} />
//   );
// }

// useHover
// import useHover from './hooks/useHover';

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: red;
// `;

// function App() {
//   const [ref, isHover] = useHover();
//   return (
//     <>
//       <Box ref={ref} />
//       {isHover ? <div>ToolTip!</div> : null}
//     </>
//   );
// }

// useScroll
import useScroll from './hooks/useScroll';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  overflow: auto;
`;

const Inner = styled.div`
  width: 10000px;
  height: 10000px;
  background-image: linear-gradient(180deg, #000 0%, #fff 100%);
`;

function App() {
  const [ref, coord] = useScroll();

  return (
    <>
      <Box ref={ref}>
        <Inner />
      </Box>
      <button
        onClick={() => {
          ref.current.scrollTo({ top: 20000, left: 20000, behavior: 'smooth' });
        }}
      >
        Max
      </button>
      <button
        onClick={() => {
          ref.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        Min
      </button>
      {coord.x}, {coord.y}
    </>
  );
}

export default App;
