import { UsersListProps } from "../types/components.types";
import User from "./User";

const UsersList = (props: UsersListProps) => {

    return (
      <div>
        {
          props.isLoading && <h1>Please wait...</h1>
        }
        {
          props.isError && <h1>Users can't fetch!</h1>
        }
        {
          props.isSuccess && <h1>Users fetched successfully</h1>
        }
        {
          props.users.length === 0 ? (
            <h1>There are no users yet</h1>
          ) : (
            <div>
              {
                props.users.map((user) => {
                  return (
                    <User {...user} key={user.id}/>
                  )
                })
              }
            </div>
          )
        }
      </div>
    );

}

export default UsersList;

// This is the presenter component
// This gets the data from the its parent container 
// Then render inside itself