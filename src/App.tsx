import { useEffect, useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  // this is a custom hook for access local storage

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const { setLocalStorageItem, getLocalStorageItem, clearLocalStorageItem } = useLocalStorage();

  const handleUser = () => {
    setLocalStorageItem('name', name);
    console.log('name', name);
  }
  
  const clearUser = () => {
    clearLocalStorageItem('name');
  }

  const fetchUser = () => {
    const fetchUsername = getLocalStorageItem('name');
    setUsername(fetchUsername);
    console.log(fetchUsername);
  }

  useEffect(() => {
    fetchUser();
  }, [username]);

  return (
    <>
      <h1>{ username }</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleUser}>Set User</button>
      <button onClick={clearUser}>Clear User</button>
    </>
  );

}

export default App;