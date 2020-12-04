import React, {Component} from 'react';

class UserComponent extends Component {

    render() {

        let {item, selectThisUser} = this.props;

        return (
            <div>
                {item.id}-{item.name}---Address: {JSON.stringify(item.address)};
                {selectThisUser && <button onClick={() => selectThisUser(item.id)}>Chose User</button>}
            </div>
        );
    }
}

export default UserComponent;