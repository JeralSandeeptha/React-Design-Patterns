import './App.css'
import UserProvider from './context/UserContext';
import MainNavigation from './routes/MainNavigation';

function App() {

  return (
    <UserProvider>
      <MainNavigation />
    </UserProvider>
  );

}

export default App;