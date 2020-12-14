import React, {Component} from 'react';
import AllUsers from "./components/AllUsers";
import customContext from "./services/ContextService";
import {Context} from "./services/ContextService";

class App extends Component {

    state = {users: []};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users:value});
            });
    }

    render() {
        const {users} = this.state;
        return (
            <Context.Provider value={<b>'Pass Through'</b>}>
                <div>
                    <AllUsers items={users}/>
                </div>
            </Context.Provider>
        );
    }
}

export default App;