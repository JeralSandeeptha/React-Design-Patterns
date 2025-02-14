import { useCallback, useEffect, useState } from "react";
import UsersList from "./UsersList";
import { IUser } from "../types/interface.types";
import getUsers from "../api/users-service/getUsers";

const Users = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // This is the normal getusers function
  // const getAllUsers = () => {
  //   getUsers({
  //     setIsError,
  //     setIsSuccess,
  //     setIsLoading,
  //     setUsers
  //   });
  // }

  // This is the memorized getusers function
  const getAllUsers = useCallback(() => {
    getUsers({
      setIsError,
      setIsSuccess,
      setIsLoading,
      setUsers
    });
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UsersList 
      isError={isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      users={users}
    />
  );

}

export default Users;

//This is the container component
// In here, as a container component
// Business logic is handled by here
// Then it's output should be given to the presenter container