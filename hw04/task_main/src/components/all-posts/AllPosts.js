import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";
import './AllPosts.css';
import {Route, withRouter} from "react-router-dom";
import FullPost from "../full_post/FullPost";

class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService;

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }


    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}
                <div className={'nest'}>
                        <Route path={'/posts/:id'} render={(props) => {
                            let {match: {params: {id}}} = props;
                            return <FullPost {...props} key={id}/>;
                        }}/>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPosts);