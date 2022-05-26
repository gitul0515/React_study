import { useEffect, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`clicked ${count} times.`);
//   }, [count]);

//   useEffect(() => {
//     console.log('Component Loaded');
//     const handleScroll = () => {
//       console.log(window.scrollY);
//     };

//     document.addEventListener('scroll', handleScroll);
//     return () => document.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       <div>You clicked {count} times.</div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <div style={{ height: 10000 }}></div>
//     </div>
//   );
// }

import { useRef } from 'react';
import Input from './components/Input';
import AutoCounter from './components/AutoCounter';

function App() {
  const inputRef = useRef();

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <AutoCounter />
    </div>
  );
}

export default App;
