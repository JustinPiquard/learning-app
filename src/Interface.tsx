import React from 'react';

export interface UserInterface {
    username: string,
    email?: string,
    password?: string,
    error:boolean,
    errorMessage:string,
    isLogin: boolean
}