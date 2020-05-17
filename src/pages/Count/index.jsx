import React, { useState, useCallback, useEffect, useMemo } from "react";
import Child from '../../components/CountChild';

export default function Count() {
    const [title, setTitle] = useState('这是一个 title');
    const [subtitle, setSubtitle] = useState("我是一个副标题");
    let [count, setCount] = useState(0);
    const changeTitle = () => {
        setTitle("标题改变了");
    };
    const memoCallback = useCallback(changeTitle, []);
    useEffect(() => {
        console.log(`count发生变化${count}`);
    }, [count])
    useEffect(() => {
        console.log('componentDidMount');
        console.log(document.querySelector('.count'));
        return () => {
            console.log('componentWillUnmount');
        }
    }, [])
    const changeCount = () => {
        setCount(count => count + 1);
    }
    
    console.log("render Count parent");
    return (
        <div className="count">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{count}</h3>
            <button onClick={changeCount}>count ++++</button>
            <button onClick={() => setSubtitle("title 已经改变")}>改副标题</button>
            <Child name="桃桃" onClick={memoCallback} />
        </div>
    )
}