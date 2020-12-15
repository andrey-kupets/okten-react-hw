import React, {Component} from 'react';
import User from "./User";
import FullUsers from "./FullUsers";

const AllUsers = ({items: users})=>  {

        return (
            <div>
                <FullUsers items={users}/>
            </div>
        );
}

export default AllUsers;
