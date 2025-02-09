import ControllComponents from './components/ControllComponents';
import UnControllComponents from './components/UnControllComponents';

const App = () => {
  return (
    <div>
      {/* This component is handled by react state */}
      <ControllComponents />
      {/* This component is handled without react state */}
      <UnControllComponents />
    </div>
  )
}

export default App
