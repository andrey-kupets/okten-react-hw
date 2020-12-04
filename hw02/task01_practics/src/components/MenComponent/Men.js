import React, {Component} from 'react';
import {men} from "../../data";
import Man from "./Man";

class Men extends Component {

    render() {
        return (
            <div>
                {
                    men.map(value => <Man item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default Men;