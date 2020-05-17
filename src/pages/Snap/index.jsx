import React from 'react';
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],//用于保存子div
        }
        this.listRef = React.createRef();
    }

    handleMessage() {//用于增加msg
        this.setState(pre => ({
            list: [`msg: ${pre.list.length}`, ...pre.list],
        }))
    }
    componentDidMount() {
        for (let i = 0; i < 20; i++) this.handleMessage();//初始化20条
        this.timeID = window.setInterval(() => {//设置定时器
            if (this.state.list.length > 200) {//大于200条，终止
                window.clearInterval(this.timeID);
                return;
            } else {
                this.handleMessage();
            }
        }, 100)
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // 我们是否在 list 中添加新的 items ？
    //     // 捕获滚动​​位置以便我们稍后调整滚动位置。
    //     if (prevState.list.length < this.state.list.length) {
    //         const list = this.listRef.current;
    //         return list.scrollHeight - list.scrollTop;
    //     }
    //     return null;
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    //     // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //     //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    //     if (snapshot !== null) {
    //         const list = this.listRef.current;
    //         list.scrollTop = list.scrollHeight - snapshot;
    //         console.log(list.scrollTop);
    //     }
    // }

    render() {
        return (
            <div ref={this.listRef}>{
                this.state.list.map( msg => (
                 <div key={msg}>{ msg } </div>
               ))
            }</div>
        );
    }
}