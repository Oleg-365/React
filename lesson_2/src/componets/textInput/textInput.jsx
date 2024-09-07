import { useState } from 'react';

function TextInput() {
  const [value, setValue] = useState('');

  const updateValue = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input type='text' onChange={updateValue} value={value}/>
      <p>{value}</p>
    </div>

  );
}

export default TextInput;