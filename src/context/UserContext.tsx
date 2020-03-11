import React, {createContext, useState, useEffect} from 'react';
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
        id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error:false,
        errorMessage:"",
        isLogin: false,
        token: ""
    });

    useEffect(() => {
        if(user.id !== ""){
            localStorage.setItem('userInformation',JSON.stringify(user))
        }

        var userInformation = localStorage.getItem("userInformation");
        
        if(userInformation !== null && user.id === "")
        {
            let userToMerge: UserInterface = JSON.parse(userInformation);
            mergeUserState(userToMerge);
        }
    });

    const mergeUserState = async (partialState: any) => {
    setUser(prevState => ({
        ...prevState,
        ...partialState
    }))
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        await axios.post(`https://localhost:44364/authenticate`, user)
      .then((res:any) => {
        var userInformation = res.data;
        mergeUserState({
            id: userInformation.id,
            email: userInformation.email, 
            firstName: userInformation.firstName,
            lastName: userInformation.lastName,
            isLogin: true, 
            token: userInformation.token, 
            error: false, 
            errorMessage: "", 
            password: ""
        });
            
        return <Redirect to={"/about"} />
      }).catch((error: any) =>
      {
          mergeUserState({error: true, errorMessage: "User not found"});
      })
    };

    const logout = async (event: any) => {
        event.preventDefault();
        await axios.post(`https://localhost:44364/logout`, null, {
            headers: { "crossDomain":"true", "Authorization": `Bearer ${user.token}`, "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials":"true"}
          })
        .then((res:any) => {
            localStorage.removeItem('userInformation');
          mergeUserState({
              id: "",
              email: "", 
              firstName: "",
              lastName: "",
              isLogin: false, 
              token: "", 
              error: false, 
              errorMessage: "", 
              password: "",
              username: ""
          });
          return <Redirect to={"/"} />
        }).catch((error: any) =>
        {
            mergeUserState({error: true, errorMessage: "Error when trying to logout"});
        })
    }

    const getUserName = () => {
        return user.username;
    };
    return (
        <UserContext.Provider value={{user, mergeUserState, getUserName, handleSubmit, logout}} > { props.children }</UserContext.Provider>
    )
}



export {UserContext, UserProvider, Consumer as UserConsumer};

