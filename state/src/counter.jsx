import { useState } from "react";

export default function Counter() {
    let[count,setcount ] = useState(0);

    function inCount() {
        setcount(++count);
        console.log(count);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>click</button>
        </div>
    )
}