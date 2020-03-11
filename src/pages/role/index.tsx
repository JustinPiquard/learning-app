import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import TableRole from '../../components/tableRole';

export const Role = (props: any) =>
{
    const context = useContext(UserContext);


    return (
        <div>
            <TableRole />
        </div>
        
        
    );
}