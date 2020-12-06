import React, {Component} from 'react';
import Comment from "../comment/Comment";
import Post from "../post/Post";
import {CommentService} from "../../services/CommentService";

class AllComments extends Component {

    commentService = new CommentService();
    state = {comments: [], chosenOne: null};

    // commentChoose = (id) => {this.setState({chosenOne: this.state.comments.find(value => value.id === id)})}
    // commentChoose = (id) => {
    //     this.commentService.getCommentById(id).then(value => this.setState({chosenOne: value}))
    // };
    commentChoose = (id) => {
        this.setState({chosenOne: this.commentService.findCommentById(this.state.comments, id)});
    }


    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //         .then(value => value.json())
    //         .then(value => {
    //             this.setState({comments: value})
    //         });
    // }

    componentDidMount() {
        this.commentService.getAllComments().then(value => this.setState({comments: value}));
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