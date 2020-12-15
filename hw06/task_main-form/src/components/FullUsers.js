import {Context} from "../services/ContextService";

export default function FullUsers(props) {
    const {items} = props;

    return (

        <div>
            {items.map(user => (<div key={user.id}>{user.id}-{user.username}</div>))}
            {/*<Context.Consumer>*/}
            {/*    {(value => value)}*/}
            {/*</Context.Consumer>*/}

        </div>
    );
}
