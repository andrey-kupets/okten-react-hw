export class CommentService {
    url = 'https://jsonplaceholder.typicode.com/comments';

   getAllComments() {
       return fetch(this.url)
           .then(value => value.json())
           .then(value => value);
   }

   getCommentById(id) {
       return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value);
   }

   findCommentById(comments = [], id) {   // только для версии userChoose, где есть this.userService.findPostById
       return comments.find(value => value.id === id);
   }
}