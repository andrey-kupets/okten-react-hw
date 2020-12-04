import React, {Component} from 'react';


class MarriedCouple extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h2>
                    {item.name} + {item.pair}
                </h2>
            </div>
        );
    }
}

export default MarriedCouple;