import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";
import Comment from "../comment/Comment";
import './AllComments.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllComments extends Component {
    state = {comments: []};
    commentService = new CommentService;

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path={'/comments/:id'} render={(props) => {
                            console.log(props);
                            return 'COMMENT INFO';
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);