import React, { useMemo } from "react";
import useEvent from '../useEvent';
import useDebounce from '../useDebounce';

function Child(props) {
    console.log("render child");
    const handle = useDebounce(function(e){
        console.log(this);
    }, 200, true)
    useEvent('mousemove', handle)
    return (
        <div>
            <button onClick={props.onClick}>改标题</button>
            <h1>{props.name}</h1>
            <div>{props.children}</div>
        </div>
    )
}

export default React.memo(Child)