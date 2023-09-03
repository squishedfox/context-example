export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
}

export const fetchUser = () => new Promise<IUser>((resolve) => {
    setTimeout(() => {
        resolve({
            id: '1',
            firstName: 'mike',
            lastName: 'allen',
            username: 'mike.allen',
            email: 'mile.allen@domain.com',
        });
    }, 1000); // resolves after 1000ms or 1 second.
});