import React, { Component, PureComponent } from 'react';
import HOC from '../Hoc';

class Child extends Component {
    state = {
        stateChild: 1
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps");
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    changeState = () => {
        this.setState({ stateChild: 2 })
    }
    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log(nextProps, nextState);
    //     return nextProps.name !== this.props.name
    // }
    render() {
        const { name, age } = this.props;
        const { stateChild } = this.state;
        console.log("home 子组件render");
        return (
            <div>
                <div>component-child</div>
                <div onClick={this.changeState}>name: {name}</div>
                <div>age: {age}</div>
                <div>自己的state: {stateChild}</div>
            </div>
        )
    }
}

export default HOC(Child);