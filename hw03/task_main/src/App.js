import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {
    render() {
        return (
            <div>
                <AllUsers/>
                <hr/>
                <AllPosts/>
                <hr/>
                <AllComments/>
            </div>
        );
    }
}

export default App;