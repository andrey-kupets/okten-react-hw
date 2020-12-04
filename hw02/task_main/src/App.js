import React, {Component} from 'react';
import AllUsersComponent from "./components/all-users/AllUsersComponent";
import AllPostsComponent from "./components/all-posts/AllPostsComponent";
import AllCommentsComponent from "./components/all-comments/AllCommentsComponent";

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <AllUsersComponent/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <AllPostsComponent/>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <AllCommentsComponent/>
                </div>
            </div>
        );
    }
}

export default App;
