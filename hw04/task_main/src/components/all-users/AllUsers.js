import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";
import './AllUsers.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService;

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path={'/users/:id'} render={(props) => {
                            console.log(props);
                            return 'USER INFO';
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);