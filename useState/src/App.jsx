import { useState } from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('Jen')
  const [lastName, setLastName] = useState('Vista')

  const userName = 'Karencd';

  const hasName = true;

  const anon = false;

  const handleCounter = () => {
    setCount(count + 1)
  }

  const handleChangeName = () => {
    setFirstName('Vista')
  }

  const handleFirstNameChange = e => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  }

  const handleLastNameChange = e => {
    console.log(e.target.value);
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>useState</h2>
      <button onClick={handleCounter}>Counter: {count}</button>
      <br/>
      <br/>
      <br/>
      <div>Change First Name: {firstName}</div>
      <button onClick={handleChangeName}>Click here to change the first name</button>
      
      <h2>Data Binding</h2>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <label>First Name: </label>
      <input 
        type="text"
        placeholder='Enter your first name'
        // value={firstName}
        onChange={(e) => handleFirstNameChange(e)}
      />
      <br/>
      <label>Last Name: </label>
      <input 
        type="text"
        placeholder='Enter your last name'
        // value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />
      <h2>Conditionals</h2>
      { userName ?? 'string'}

      <h3>{hasName && 'Kevin' }</h3>
      <h3>{userName && 'Karen'}</h3>

      <h3>{anon ? 'Anon' : userName}</h3>
    </>
  )
}

export default App
