export class UserService {
    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUsers() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value);
    }

    // getUserById(id) {
    //     return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value);
    // }
    findUserById(users = [], id) {   // только для версии userChoose, где есть this.userService.findUserById
        return users.find(value => value.id === id);
    }
}
