import { useEffect, useState } from "react";
import { IUser, fetchUser } from "../api";

const useGetUserHook = () => {
    
    const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [user, setUser] = useState<IUser|null>(null);

    const callApiHandler = async () => {
        setIsFetching(true);
        const user = await fetchUser();
        setUser(user);
        setIsInitialLoading(false);
        setIsFetching(false);
        return user;
    };

    useEffect(() => {
        if (isInitialLoading && !isFetching) {
            callApiHandler();
        }
    }, [isInitialLoading, isFetching])

    return {
        isInitialLoading,
        isFetching,
        user,
        fetch: callApiHandler,
    }
};

export default useGetUserHook;