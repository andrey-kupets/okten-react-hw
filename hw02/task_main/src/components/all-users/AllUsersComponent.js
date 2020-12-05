import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import './AllUsers.css';

class AllUsersComponent extends Component {

    state = {users: [], classState: 'one'};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromAPI => {
                this.setState({users: usersFromAPI})
            })
    }

    changeColor = () => {
        if (this.flag) {
            this.setState( {classState: 'one'});
        }else{
            this.setState( {classState: 'two'});
        }
        this.flag = !this.flag;
    }

    selectThisUser = (id) => {
        let chosenUser = this.state.users.find(value => value.id === id)
        this.setState({chosenUser})
    }

    render() {
        let {classState, users, chosenUser} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Users info</h1>
                {
                    users.map(value => <UserComponent
                        item={value}
                        key={value.id}
                        selectThisUser={this.selectThisUser}
                    />)}

                <hr/>

                {
                     chosenUser && <UserComponent item={chosenUser}/>
                }
            </div>

        );
    }
}

export default AllUsersComponent;

