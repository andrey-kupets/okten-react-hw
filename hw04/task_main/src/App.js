import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    {/*<a href="/users">users</a> principle the same*/}
                    <Link to={'/users'}>users</Link><br/>
                    <Link to={'/posts'}>posts</Link><br/>
                    <Link to={'/comments'}>comments</Link>
                    <hr/>

                    <Switch>
                        {/*<Route path={'/users'} component={AllUsers}/>*/}
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>;
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>;
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <AllComments/>;
                        }}/>
                    </Switch>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default App;
