import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item, postChoose, isShowButton} = this.props;
        return (
            <div>
                {item.id} - {item.title} {!isShowButton &&
                <button onClick={() => {postChoose(item.id)}}>Choose Post</button>
            }
            </div>
        );
    }
}

export default Post;