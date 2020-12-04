import React, {Component} from 'react';

class PostComp extends Component {
    render() {

        let {item, selectThisPost} = this.props;

        return (
            <div>
                {item.id}-{item.title};
                {selectThisPost && <button onClick={() => selectThisPost(item.id)}>Choose Post</button>}
            </div>
        );
    }
}

export default PostComp;