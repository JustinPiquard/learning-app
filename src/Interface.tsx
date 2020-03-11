import React from 'react';

export interface UserInterface {
    id?: string,
    username: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    error:boolean,
    errorMessage:string,
    isLogin: boolean,
    token?: string
}