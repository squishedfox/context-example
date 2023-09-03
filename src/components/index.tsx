import {UserContext} from '../context';

const UserProfile = () => {
    return (<UserContext.Consumer>
        {(ctx) => (<h1>Hello {ctx.user?.firstName}</h1>)}
    </UserContext.Consumer>);
};

export default UserProfile;