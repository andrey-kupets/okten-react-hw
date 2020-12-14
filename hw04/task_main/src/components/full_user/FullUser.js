import React, {Component} from 'react';
import {UserService} from "../services/UserService";

class FullUser extends Component {

    state = {user: null};
    userService = new UserService(); // both () or not () --- act

    async componentDidMount() {
        // let {id} = this.props; 1st case all users
        console.log(this.props);
        let {match: {params:{id}}} = this.props;
        let user = await this.userService.getUser(id);
        this.setState({user});
    }

    render() {
        // let {item} = this.props;
        let {user} = this.state;

        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.username} - {user.email}</div>}
            </div>
        );
    }
}

export default FullUser;
