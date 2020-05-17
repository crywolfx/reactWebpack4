import React, { Component, PureComponent } from "react";
import './index.less';
import Child from '../../components/Child';

export default class Home extends Component {
    constructor () {
        super();
        this.state = {
            name: '李四',
            parentName: "张三",
        }
        this.ref = React.createRef();
    }
    getName = () => {
        console.log("点击点击");
        console.log(this.ref);
        this.setState({ parentName: "ls" });
    };
    componentWillMount() {
        console.log("Home componentWillMount");
    }
    componentDidMount() {
        console.log("Home componentDidMount");
    }
    componentWillReceiveProps(props) {
        console.log("Home componentWillReceiveProps");
    }
    componentWillUpdate() {
        console.log("Home componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("Home componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("Home componentWillUnmount");
    }
    render() {
        console.log("home 父组件render");
        const { name } = this.state;
        return <div className="home-page">
            <div onClick={this.getName}>home page</div>
            <Child name={name}  age={14}  ref={this.ref}/>
        </div>;
    }
}