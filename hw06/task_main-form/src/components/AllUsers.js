import React, {Component} from 'react';
import User from "./User";
import FullUsers from "./FullUsers";

class AllUsers extends Component {

    render() {
        const {items: users} = this.props;
        return (
            <div>
                <FullUsers items={users}/>
            </div>
        );
    }
}

export default AllUsers;