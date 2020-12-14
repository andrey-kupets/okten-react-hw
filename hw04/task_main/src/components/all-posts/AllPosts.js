import React, {Component} from 'react';
import doFetch from "../services/doFetch";
import Post from "../post/Post";
import './AllPosts.css';
import {Route, withRouter} from "react-router-dom";
import FullPost from "../full_post/FullPost";

class AllPosts extends Component {
    state = {posts: false};


    async componentDidMount() {
        console.log(this.props);
        const {match:{url}} = this.props;
        doFetch(url).then(posts => this.setState({posts}))
    }


    render() {
        let {posts} = this.state;
        return (
            <div>
                {posts && posts.map(value => <Post item={value} key={value.id}/>)}
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
