import React, {Component} from 'react';
import CommentComponent from "../comment/CommentComponent";
import './AllComments.css';

class AllCommentsComponent extends Component {
    state = {comments: [], classState: 'one', flag: false, chosenComment: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then (value => value.json())
            .then(commentsFromAPI => {
                this.setState({comments: commentsFromAPI});
            });
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: "one"});
        }else{
            this.setState({classState: "two"});
        }
        this.flag = !this.flag;
    }

    selectThisComment = (id) => {
        let chosenComment = this.state.comments.find(value => value.id === id);
        this.setState({chosenComment});
    }

    render() {
        let {comments, classState, chosenComment} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Comments Info</h1>
                {
                    comments.map(value => (<CommentComponent
                        item={value}
                        key={value.id}
                        selectThisComment={this.selectThisComment}
                    />))
                }

                <hr/>

                {
                    chosenComment && <CommentComponent item={chosenComment}/>
                }
            </div>
        );
    }
}

export default AllCommentsComponent;