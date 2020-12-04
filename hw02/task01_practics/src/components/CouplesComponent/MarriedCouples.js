import React, {Component} from 'react';
import {men, women} from "../../data";
import MarriedCouple from "./MarriedCouple";


let {id: women_id, name: women_name} = women;
let couples = [...men, ...women];

const joinArraysIn1 = (ARRAY_MEN, ARRAY_WOMEN) => {
    let MEN = JSON.parse(JSON.stringify(ARRAY_MEN));
    let WOMEN = JSON.parse(JSON.stringify(ARRAY_WOMEN));

    for (const MAN of MEN) {
        for (const WOMAN of WOMEN) {
            if (MAN.wife_id === WOMAN.husband_id) {
                MAN.pair = WOMAN.name;
            }
        }
    }
    return MEN;
}

let joinedArray = joinArraysIn1(men, women);
console.log(joinedArray);

class MarriedCouples extends Component {

    render() {
        return (
            <div>
                {
                    joinedArray.map(value =>
                        <MarriedCouple item={value} key={value.id}/>
                    )
                }
            </div>
        );
    }
}

export default MarriedCouples;