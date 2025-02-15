import { ChangeEvent, FormEvent, useState } from "react";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";

const Settings = () => {

  const { setUser, user } = useUser();

  const [username, setUsername] = useState<string>('');

  const handleInput  = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const submitButton = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      id: user?.id || 1,
      name: username
    });
  }
    
  return (
    <div>
      <h1>Settings Page</h1>

      <input type="text" onChange={handleInput}/>

      <button onClick={submitButton}>Change Name</button>

      <Link to='/'>Go to Profile</Link>
    </div>
  );

}

export default Settings;
