import React, {Component} from 'react';
import AllUsers from "./components/AllUsers";
import customContext from "./services/ContextService";
import {Context} from "./services/ContextService";
import User from "./components/User";

class App extends Component {
     // myForm = React.createRef();
    state = {users: [], inputValue: '',currentUser: null};

    send = (e) => {

        e.preventDefault();

        const {users, inputValue} = this.state;
        const currentUser = users.find(item => item.id === +inputValue)

        this.setState({currentUser})
    };

    commitState = (e) => {
        this.setState({inputValue: e.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});
            });
    }

    render() {
        const {users,currentUser} = this.state;
        return (
            // <Context.Provider value={<b>'Pass Through'</b>}>
                <div>
                    <AllUsers items={users}/>
                    <form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
                        <input type = "number" onInput={this.commitState} value={this.state.inputValue}/>
                        <button type = "submit">send</button>
                    </form>
                    {currentUser && <User user={currentUser}/>}
                </div>
            // </Context.Provider>
        );
    }



}

export default App;
