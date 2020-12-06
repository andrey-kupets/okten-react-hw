export class PostService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value);
    }

    getPostById(id) {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value);
    }

    findPostById(posts = [], id) {   // только для версии userChoose, где есть this.userService.findPostById
        return posts.find(value => value.id === id);
    }
}