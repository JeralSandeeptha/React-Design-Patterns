import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useUser = () => {

  const context = useContext(UserContext);

  if(!context) {
    throw new Error('useUser should be inside of the User Context');
  }

  return context;

}

export default useUser;
