import { IUser } from "./interface.types"

export type UsersListProps = {
    users: IUser[],
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
}