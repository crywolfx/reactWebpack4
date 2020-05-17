import React, { Component } from 'react'
// import { createStore } from 'redux'
// import { connect } from 'react-redux'

// 定义counter组件
export default class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    // const value = this.props.value
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}> +1</button>
      </div>
    )
  }
}

// // Action  
// const increaseAction = { type: 'increase' }

// //  将state映射到Counter组件的props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// //  将action映射到Counter组件的props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// //  传入上面两个函数参数，将Counter组件变为App组件
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// export default App;