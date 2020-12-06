import React, {Component} from 'react';
class User extends Component {
    render() {
        let {item, isShowButton} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                 {/*{!isShowButton && <button onClick={() => {userChoose(item.id)}}>Choose User</button>}*/}
            </div>
        );
    }
}

export default User;