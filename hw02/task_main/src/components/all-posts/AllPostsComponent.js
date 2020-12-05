import React, {Component} from 'react';
import PostComp from "../post/PostComp";
import './AllPosts.css'

class AllPostsComponent extends Component {

    state = {posts: [], classState: 'one', flag: false, chosenPost: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then (value => value.json())
            .then(postsFromAPI => {
                this.setState({posts: postsFromAPI});
            });
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'});
        }else{
            this.setState({classState: 'two'});
        }
        this.flag = !this.flag;
    }

    selectThisPost = (id) => {
        let chosenPost = this.state.posts.find(value => value.id === id);
        this.setState({chosenPost});
    }

    render() {
        let {posts, classState, chosenPost} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Posts Info</h1>
                {
                    posts.map(value => (<PostComp
                        item={value}
                        key={value.id}
                        selectThisPost={this.selectThisPost}
                    />))
                }

                <hr/>

                {
                    chosenPost && <PostComp item={chosenPost}/>
                }
            </div>
        );
    }
}

export default AllPostsComponent;