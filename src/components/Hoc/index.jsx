import React, { Component } from 'react';

const HOC = WrapperComponent => {
    class HOC extends Component {
        state = { toggle: false };
        click = () => {
            this.setState({ toggle: !this.state.toggle });
        };

        render() {
            const { toggle } = this.state;
            const {forwardedRef, ...rest} = this.props;
            return (
                <div className="App">
                    <button onClick={this.click}>Toggle Name</button>
                    {toggle && <WrapperComponent {...rest} ref={forwardedRef}/>}
                </div>
            );
        }
    };
    return React.forwardRef((props, ref) => {
        return <HOC {...props} forwardedRef={ref} />;
    });

}

export default HOC;