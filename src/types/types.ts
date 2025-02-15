import { Dispatch, SetStateAction } from "react"

export type UserContextType = {
    user: IUser | null,
    setUser: Dispatch<SetStateAction<IUser | null>>,
}

export interface IUser{
    id: number,
    name:string,
}