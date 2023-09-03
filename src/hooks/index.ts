import { useEffect, useState } from "react";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}
const useGetUserHook = () => {
    
    const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [user, setUser] = useState<IUser|null>(null);

    const fetchUser = () => new Promise<IUser>((resolve) => {
        setIsFetching(true);
        setTimeout(() => {
            resolve({
                id: '1',
                firstName: 'mike',
                lastName: 'allen',
                username: 'mike.allen',
                email: 'mile.allen@domain.com',
            });
            setIsFetching(false);
            setIsInitialLoading(false);
        }, 1000); // resolves after 1000ms or 1 second.
    });

    if (isInitialLoading && !isFetching) {
        fetchUser();
    }

    return {
        isInitialLoading,
        isFetching,
        user,
        fetch: fetchUser,
    }
};

export default useGetUserHook;