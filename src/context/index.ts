import { createContext } from "react";
import { IUser } from "../api";

export interface IUserContext {
    user: IUser | null;
    fetch: (() => Promise<IUser | null>) | null;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    fetch: null,
});