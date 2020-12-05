import React, {Component} from 'react';
import '../all-users/AllUsers.css';
class UserComponent extends Component {
    state = {classState: 'one'};
    changeColor = () => {
        if (this.flag) {
            this.setState( {classState: 'one'});
        }else{
            this.setState( {classState: 'two'});
        }
        this.flag = !this.flag;
    }

    render() {
        let {item, selectThisUser} = this.props;
        let {classState} = this.state;
        return (

            <div >

                <h3 onClick={this.changeColor} className={classState}>
                    {item.id} - {item.name} - City: {item.address.city};
                    {selectThisUser && <button onClick={() => selectThisUser(item.id)}>Choose User</button>}

                </h3>
            </div>
        );
    }
}

export default UserComponent;