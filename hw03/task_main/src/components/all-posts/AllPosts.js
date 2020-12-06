import React, {Component} from 'react';
import {PostService} from "../../services/PostService";
import Post from "../post/Post";

class AllPosts extends Component {

    postService = new PostService();
    state = {posts: [], chosenOne: null};

    // postChoose = (id) => {this.setState({chosenOne: this.state.posts.find(value => value.id === id)})}
    // postChoose = (id) => {this.postService.getPostById(id).then(value => this.setState({chosenOne: value}))};
    postChoose = (id) => {              //вынос в findPostById
        this.setState({chosenOne: this.postService.findPostById(this.state.posts, id)});
    }

    // componentDidMount() {                       // straight
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(value => value.json())
    //         .then(value => {
    //             this.setState({posts: value})
    //         });
    // }

    componentDidMount() {                         // from Service
        this.postService.getAllPosts().then(value => this.setState({posts: value}));
    }

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post
                        item={value}
                        key={value.id}
                        postChoose={this.postChoose}
                    />)
                }
                {/*{chosenOne && <h2>{chosenOne.id} - {chosenOne.title}</h2>}*/}
                {chosenOne && <h2><Post item={chosenOne} isShowButton={true}/></h2>}
            </div>
        );
    }
}

export default AllPosts;