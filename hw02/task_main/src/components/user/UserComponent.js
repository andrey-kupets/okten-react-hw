import React, {Component} from 'react';

class UserComponent extends Component {

    render() {

        let {item, selectThisUser} = this.props;

        return (
            <div>
                {item.id}-{item.name}-City: {JSON.stringify(item.address.city)};
                {selectThisUser && <button onClick={() => selectThisUser(item.id)}>Choose User</button>}
            </div>
        );
    }
}

export default UserComponent;