import React, {Component} from 'react';
import doFetch from "../services/doFetch";
import User from "../user/User";
import './AllUsers.css';
import {
    BrowserRouter as Router,  // left as a template
    Switch,            // left as a template
    Route,
    Link,          // left as a template
    withRouter
} from "react-router-dom";
import FullUser from "../full_user/FullUser";

class AllUsers extends Component {
    state = {users: false};


    componentDidMount() {
        const {match:{url}} = this.props;
        doFetch(url).then(users => this.setState({users}))
    }

    render() {

        let {users} = this.state;

        // let {match: {url}} = this.props; // for 1st case route
        return (
            <div>
                {users && users.map(value => <User item={value} key={value.id}/>)}
                <div className={'nest'}>
                        <Route path={'/users/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullUser {...props} key={id}/>;
                        }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);
