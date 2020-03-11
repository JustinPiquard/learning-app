import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import TableUser from '../../components/tableUser';

export const User = (props: any) =>
{
    const context = useContext(UserContext);

    return (
        <div>
            <TableUser />
        </div>
    );
}