import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const MainNavigation = () => {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Profile}/>
            <Route path='/settings' Component={Settings}/>
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;