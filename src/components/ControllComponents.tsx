import { useReducer } from 'react';

type AuthUser = { email: string, password: string };
type UserAction = { type: "setEmail"; payload: string } | { type: "setPassword"; payload: string };

const ControllComponents = () => {

  const reducer = (prevState: AuthUser, action: UserAction): AuthUser => {
    switch (action.type) {
      case "setEmail":
        return { ...prevState, email: action.payload };
      case "setPassword":
        return { ...prevState, password: action.payload };
      default:
        return prevState;
    }
  }

  const [user, setUser] = useReducer(reducer, {
    email: '',
    password: '',
  });

  const handleUser = () => {
    console.log(user);
  }

  return (
    <div>
      <input type="email" onChange={(e) => setUser({ type: 'setEmail', payload: e.target.value })}/>
      <input type="text" onChange={(e) => setUser({ type: 'setPassword', payload: e.target.value })}/>
      <button onClick={handleUser}>Save</button>
    </div>
  )
}

export default ControllComponents;
