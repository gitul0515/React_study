import useToggle from '../../hooks/useToggleggle';
import Checkbox from './Checkbox';
import Box from './Box';
import useHover from '../../hooks/useHoverover';
import useKeyPress from '../../hooks/useKeyPressress';

function App() {
  const [on1, toggle1] = useToggle();
  const [on2, toggle2] = useToggle();
  const [on3, toggle3] = useToggle();
  const [ref, isHover] = useHover();
  const keyPressed = useKeyPress('a');

  return (
    <div>
      <Checkbox label="Label1" checked={on1} onChange={toggle1} />
      <Checkbox label="Label2" checked={on2} onChange={toggle2} />
      <Checkbox label="Label3" checked={on3} onChange={toggle3} />
      {/* <button onClick={toggle}>{on ? 'True' : 'False'}</button> */}
      {isHover ? 'hover' : 'mouseout'}
      <Box ref={ref} />

      {keyPressed && 'Pressed'}
    </div>
  );
}

export default App;
