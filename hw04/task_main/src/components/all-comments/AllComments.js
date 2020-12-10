import React, {Component} from 'react';
import {CommentService} from "../services/CommentService";
import Comment from "../comment/Comment";
import './AllComments.css';
import {Route, withRouter} from "react-router-dom";
import FullComment from "../full-component/FullComment";

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
                        <Route path={'/comments/:id'} render={(props) => {
                            let {match:{params:{id}}} = props;
                            return <FullComment {...props} key={id}/>;
                        }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);