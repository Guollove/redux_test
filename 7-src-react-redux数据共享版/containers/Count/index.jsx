import React, { Component } from 'react'

//引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrmemntAsyncAction
} from '../../redux/actions/count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


/**
 * 这是UI组件
 */
class Count extends Component {

    //加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    //减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    //奇数在加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }

    }
    //异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 1000)
        // setTimeout(()=>{
        // },500)
    }
    render() {
        return (
            <div>
                <h2>我是Count组件,下方组件总认为 {this.props.renshu}</h2>
                <h4>当前求和为: {this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前就和为基数再加</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        )
    }
}

/**
 * 这是容器组件
 */
//创建connect()()并暴露一个Count的容器组件
export default connect(
    state => ({ count: state.he , renshu:state.rens.length}),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrmemntAsyncAction,
    }
)(Count)