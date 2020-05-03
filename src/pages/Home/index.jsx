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
        this.setState({ name: 'componentDidMount' })
    }
    getName = () => {
        this.setState({ name: "ls" });
    };
    render() {
        const { name } = this.state;
        return <div className="home-page">{name}</div>;
    }
}
