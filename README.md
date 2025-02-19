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

A function that takes a component and returns a new component with additional props or behavior.

The scenario is, I have two text components and should add the same font size for both. Sizees should be large with same value.

This is a Header Component
```js
import React from 'react';

type Props = {
    style?: React.CSSProperties
};

const Heading = (props: Props) => {

    return (
        <h1 style={{...props.style}}>This is a Heading Component</h1>      
    );

}

export default Heading;
```
This is a Paragraph Component.
```js
import React from 'react';

type Props = {
  style?: React.CSSProperties
};

const Paragraph = (props: Props) => {

  return (
    <p style={{...props.style}}>This is a Paragraph Component</p>      
  );

}

export default Paragraph;
```
This is a SubTitle Component
```js
import React from 'react';

type Props = {
    style?: React.CSSProperties
};

const SubTitle = (props: Props) => {

  return (
    <h3 style={{...props.style}}>This is a Sub Title Component</h3>
  );

}

export default SubTitle;
```

Now we create a HOC. This is the HOC.
```js
import { ComponentType } from 'react';

const WithLargeFont = <Props extends object>(WrappedComponent: ComponentType<Props>) => {

  return (props: Props) => {
    return <WrappedComponent {...props} style={{ fontSize: '80px' }}/>
  };

};

export default WithLargeFont;
```

Then we can use this pass the component to the Higher Order Component. It will return a new component what we want with changes.
```js
import './App.css'
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import SubTitle from './components/SubTitle';
import WithLargeFont from './utils/WithLargeFont';

function App() {

  const LargeParagraph = WithLargeFont(Paragraph);
  const LargeHeading = WithLargeFont(Heading);
  const LargeSubTitle = WithLargeFont(SubTitle);

  return (
    <>
      <Heading />
      <LargeHeading />

      <br />

      <Paragraph />
      <LargeParagraph />

      <br />

      <SubTitle />
      <LargeSubTitle />
    </>
  );

}

export default App;
```

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
