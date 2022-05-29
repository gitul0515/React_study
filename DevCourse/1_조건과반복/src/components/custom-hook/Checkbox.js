const Checkbox = ({ label = 'Label', checked = false, onChange }) => {
  console.log(label, checked);
  return (
    <label>
      {label}
      <input type="checkbox" defaultChecked={checked} onChange={onChange} />
    </label>
  );
};

export default Checkbox;
