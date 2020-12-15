import React, {Component} from 'react';
import AllUsers from "./components/AllUsers";
import customContext from "./services/ContextService";
import {Context} from "./services/ContextService";
import User from "./components/User";

class App extends Component {
    myForm = React.createRef();
    state = {users: [], inputValue: ''};

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
                    <form action={'/savedata'} onSubmit={this.send} ref={this.myForm}>
                        <input type = "number" onInput={this.commitState} value={this.state.inputValue}/>
                        <button onSubmit={this.getUser}>send</button>
                    </form>
                    <User item={users}/>
                </div>
            </Context.Provider>
        );
    }

    send = (e) => {
        e.preventDefault();
        // console.log(this.myForm.current[0].value);
        console.log(e.target.children[0].value);
    };

    commitState = (e) => {
        this.setState({inputValue: e.target.value});
    }

    getUser = () => {
        const {inputValue, users} = this.state;
        if (inputValue) {
            users.map(value => value.id === inputValue)
            return <User/>
        }
    }

}

export default App;