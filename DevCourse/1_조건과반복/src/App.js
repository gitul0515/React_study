// import './App.css';
// import Logo from './components/Logo';
// import Paragraph from './components/Paragraph';

// function App() {
//   const name = '리액트';

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Logo size="100px" />
//         <Logo />
//         <Logo />

//         <Paragraph fontSize={46} color="white">
//           Edit <code>src/App.js</code> and save to reload.
//         </Paragraph>
//         <Paragraph fontSize={26} color="blue">
//           sadasdasdasdasd
//         </Paragraph>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn {name}
//         </a>
//       </header>
//     </div>
//   );
// }

import { useState } from 'react';
import Board from './components/Board/index';

function App() {
  const [visible, setVisible] = useState(false);
  const articles = [
    {
      id: 1,
      title: '헬로우 리액트1',
      author: '권기홍',
    },
    {
      id: 2,
      title: '헬로우 리액트2',
      author: '권기홍',
    },
    {
      id: 3,
      title: '헬로우 리액트3',
      author: '권기홍',
    },
  ];

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <h1>헬로우 리액트</h1>}
      {visible ? <Board articles={articles} /> : '토글 버튼을 클릭하세요.'}
    </div>
  );
}

export default App;
