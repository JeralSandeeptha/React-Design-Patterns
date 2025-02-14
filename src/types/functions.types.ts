import { Dispatch, SetStateAction } from "react";
import { IUser } from "./interface.types";

export type GetUsersProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setUsers: Dispatch<SetStateAction<IUser[]>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
}