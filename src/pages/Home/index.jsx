import React, { Component } from "react";
import './index.less';
export default class Home extends Component {
    constructor () {
        super();
        this.state = {
            name: "张三",
        }
    }
    componentDidMount = () => {
        this.setState({ name: 'componentDidMsssount' })
    }
    getName = () => {
        console.log("object");
        this.setState({ name: "ls" });
    };
    render() {
        const { name } = this.state;
        return <div className="home-page" onClick={this.getName}>
            <div>name dddd xx xxxx  kllllllllllldsdljkl</div>
            <div>{name}</div>
        </div>;
    }
}