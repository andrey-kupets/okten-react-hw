import React, {Component} from 'react';

class Woman extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h2>
                    {item.name}: {item.age}
                </h2>
            </div>
        );
    }
}

export default Woman;