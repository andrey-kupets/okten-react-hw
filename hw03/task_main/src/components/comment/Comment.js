import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, commentChoose, isShowButton} = this.props;

        return (
            <div>
                {item.id} - {item.name} - {item.email} {!isShowButton &&
                    <button onClick={() => {commentChoose(item.id)}}>Choose Comment</button>}

            </div>
        );
    }
}

export default Comment;