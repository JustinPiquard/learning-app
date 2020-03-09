import React, {createContext, useState} from 'react';
import { UserInterface } from './Interface';
// import axios from 'axios'


const UserContext = createContext<any>({
    user: {} as UserInterface,
    mergeUserState: () => {},
    handleSubmit: () => {},
    getUserName:() => {}
});
{/* <UserInterface | null>(null); */}

const { Provider, Consumer } = UserContext;

function UserProvider(props: any)
{
    const [user , setUser] = useState<UserInterface>({
        username: "test",
        email: "",
        password: ""
    });

    const mergeUserState = (partialState: any) => 
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }));

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log("test");
        mergeUserState({username: "test"});
        console.log(user);
    //     axios.post(`https://localhost:44364/Account/Login`, user)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
    };

    const getUserName = () => {
        return user.username;
    };

    return <UserContext.Provider value={{user: user, mergeUserState, handleSubmit, getUserName}}>(props.children}</UserContext.Provider>
}

export {UserProvider, Consumer as UserConsumer, UserContext}

