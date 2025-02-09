import './App.css'
import Input from './components/Input';
import Toggle from './components/Toggle';

function App() {

  return (
    <>
      {/* Basically we pass an logic function as a props */}
      {/* That prop can be a whole / partial UI peice */}

      {/* Input element with render props react design pattern */}
      <Input 
        renderBelow= {(value) => <h5>{value}</h5>}
      />

      {/* toggle element with render props react design pattern */}
      <Toggle 
        toggle={(a) => {
          return (
            a ? <h5>Toogle is ON</h5> : <h5>Toogle is OfFF</h5>
          )
        }}
      />
    </>
  );

}

export default App;