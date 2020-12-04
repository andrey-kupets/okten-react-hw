import React, {Component} from 'react';

class CommentComponent extends Component {
    render() {

        let {item, selectThisComment} = this.props;

        return (
            <div>
                {item.id}-{item.email}-{item.body};
                {selectThisComment && <button onClick={() => selectThisComment(item.id)}>Chose Comment</button>}
            </div>
        );
    }
}

export default CommentComponent;