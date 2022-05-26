import { useCallback, useState } from 'react';
import ShowSum from './components/ShowSum';

// function App() {
//   const [label, setLabel] = useState('Result');
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setLabel(label + ':')}>change Label</button>
//       <ShowSum label={label} n={10000} />
//     </div>
//   );
// }
import Checkbox from './components/Checkbox';

function App() {
  const [foodOn, setFoodOn] = useState(false);
  const [clothesOn, setClothesOn] = useState(false);
  const [shelterOn, setShelterOn] = useState(false);

  const foodChange = useCallback((e) => setFoodOn(e.target.checked), []);
  const clothesChange = useCallback((e) => setClothesOn(e.target.checked), []);
  const shelterChange = useCallback((e) => setShelterOn(e.target.checked), []);

  return (
    <div>
      <Checkbox label="Food" on={foodOn} onChange={foodChange} />
      <Checkbox label="Clothes" on={clothesOn} onChange={clothesChange} />
      <Checkbox label="Shelter" on={shelterOn} onChange={shelterChange} />
    </div>
  );
}

export default App;
