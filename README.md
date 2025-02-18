# React Design Patterns 

We can identify different React Design Patterns.

They are,
- HOC / Higher Order Components Pattern
- Factory Pattern
- Provider Pattern
- Custom Hook Pattern
- Render Props Pattern
- Compound Pattern
- Control and Uncontroll Components Pattern
- Container Presenter Pattern

## Table of Contents

- [HOC Pattern](#hoc-pattern)
- [Factory Pattern](#factory-pattern)
- [Provider Pattern](#provider-pattern)
- [Custom Hook Pattern](#custom-hook-pattern)
- [Render Props Pattern](#render-props-pattern)
- [Compound Components Pattern](#compound-components-pattern)
- [Control and Uncontrol Components Pattern](#control-and-uncontrol-components-pattern)
- [Container Presenter Pattern](#container-presenter-pattern)
  
## HOC Pattern

## Control and Uncontrol Components Pattern

In the control components their state is managed by the react state.

```js
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
```

In uncontrolled components their state is managed by ref.

```js
import { useRef } from 'react';

const UnControllComponents = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleUser = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        });
    }

    return (
        <div>
            <input type="email" ref={emailRef}/>
            <input type="text" ref={passwordRef}/>
            <button onClick={handleUser}>Click</button>
        </div>
    );

}

export default UnControllComponents;
```
