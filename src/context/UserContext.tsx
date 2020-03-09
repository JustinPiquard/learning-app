import React, {createContext, useState} from 'react';
import { UserInterface } from '../Interface';
import axios from 'axios'
import { Redirect } from 'react-router-dom';


const UserContext = createContext<any>({
    user: {} as UserInterface,
    mergeUserState: () => {},
    handleSubmit: () => {},
    getUserName:() => {}
});

const {Consumer} = UserContext;

function UserProvider(props: any)
{
    const [user , setUser] = useState<UserInterface>({
        username: "",
        email: "",
        password: "",
        error:false,
        errorMessage:"",
        isLogin: false
    });

    const mergeUserState = (partialState: any) => {
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }))
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        await axios.post(`https://localhost:44364/Account/Login`, user)
      .then((res:any) => {
        console.log(res);
        console.log(res.data);
        mergeUserState({error: false, errorMessage: "", isLogin: true});
        return <Redirect to={"/about"} />
      }).catch((error: any) =>
      {
          mergeUserState({error: true, errorMessage: "User not found"});
      })
    };

    const getUserName = () => {
        return user.username;
    };
    return (
        <UserContext.Provider value={{user, mergeUserState, getUserName, handleSubmit}} > { props.children }</UserContext.Provider>
    )
}



export {UserContext, UserProvider, Consumer as UserConsumer};

