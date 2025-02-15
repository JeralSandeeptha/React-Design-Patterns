import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const Profile = () => {

  const { user } = useUser();
    
  return (
    <div>
      <h1>Profile Page</h1>

      <div>
        {
          user ? (
            <div>
              <h5>{user?.id}</h5>
              <h2>{user?.name}</h2>
            </div>
          ) : (
            <h5>User is not set</h5>
          )
        }
      </div>

      <Link to='/settings'>Go to Profile</Link>

    </div>
  );
  
}

export default Profile;
