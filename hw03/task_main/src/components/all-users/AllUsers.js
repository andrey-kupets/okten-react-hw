import React, {Component} from 'react';
import User from "../user/User";
import './AllUsers.css'
import {UserService} from "../../services/UserService";

class AllUsers extends Component {

    userService = new UserService();
    state = {users: [], startId: 1};

    // componentDidMount() {
    //     this.userService.getAllUsers().then(value => this.setState({users: value}));
    // }

    render() {
        let {users} = this.state;
        return (
            <div>
                <button onClick={this.show2Users}>show 2 users</button>
                {
                    users.map(value => (<User item={value} key={value.id}/>))
                }
            </div>
        );
    }

    show2Users = async () => { // обязат. стрел. Ф. - или потеря контекста
        let {users, startId} = this.state;
        let usersResponse = await this.userService.get2Users(startId);
        let {userById1, userById2} = usersResponse;
        users.push(userById1);
        users.push(userById2);
        console.log(users);
        startId += 2;
        this.setState({users, startId: startId});
    };
}

export default AllUsers;