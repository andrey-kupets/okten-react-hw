import React, {Component} from 'react';
import {women} from "../../data";
import Woman from "./Woman";


class Women extends Component {
    render() {
        return (
            <div>
                {women.map(value => <Woman item={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Women;