import React, {Component} from 'react';
import Comment from "../comment/Comment";
import Post from "../post/Post";

class AllComments extends Component {

    state = {comments: [], chosenOne: null};

    commentChoose = (id) => {this.setState({chosenOne: this.state.comments.find(value => value.id === id)})}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                this.setState({comments: value})
            });
    }


    render() {
        let {comments, chosenOne} = this.state;
        return (
            <div>
                {
                    comments.map(value => <Comment
                        item={value}
                        key={value.id}
                        commentChoose={this.commentChoose}
                    />)
                }
                {chosenOne && <h2>{chosenOne.id} - {chosenOne.name} - {chosenOne.email}</h2>}
                {/*{chosenOne && <h2><Comment item={chosenOne} isShowButton={true}/></h2>}*/}
            </div>
        );
    }
}

export default AllComments;