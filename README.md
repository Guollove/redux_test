## 1 求和案例 redux精简版
    1 去除Count组件自身的状态
    2 src下建立：
        -src
            -redux
                -store.js
                -count_reducer.js

    3 store.js:
        1 引入redux中的createStore函数 创建一个store
        2 createStore调试时要传入一个为其服务的reducer
        3 记得暴露store对象
    
    4 count_reducer.js:
        1 reducer的本质是一个函数 接收：preState,action 返回加工后的状态
        2 reducer有两个作用：初始化状态，加工状态
        3 reducer被第一次调用时 是store自动触发的 
            传递的preState是undefined
            传递的actio是：{type:'@@REDUX/INIT_a.2.b.4}

    5 在index.js中监测store中状态的改变 一旦发生改变重新渲染<App/>
        备注：redux只负责管理状态 至于状态的改变驱动着页面的展示，要靠我们自己写。

## 2 求和案例 redux完整版
    新增文件
        count_action.js 专门用于创建action对象
        constant.js 放置容易写错的type值

## 3 求和案例 redux异步action版
    1 明确 延迟的动作不想交给自身 想交给action
    2 何时需要异步action : 想要对状态进行操作 但是具体的数据靠异步任务返回
    3 具体编码
        1 yarn add redux-thunk 并将配置在store中
        2 创建action的函数不在返回一般对象 而是一个函数 该函数中写异步任务
        3 异步任务有结果后 分发一个同步的action去真正的操作数据
    4 备注： 异步action不是必须要写的 完全可以自己等待异步任务的结果  再去分发同步action 

## 4 求和案例_react-redux基本使用
    1 明确两个概念：
        1）UI组件：不能使用任何redux的api，只负责页面的呈现。交互等
        2）容器组件：负责和redux通信，将结果交给UI朱家
    2 如何创建一个容器其组件 -- 靠react-redux 的 connect函数
        connect(mapStateToProps,mapDispatchToProps)(UI组件)
            ·mapStateToProps：映射状态，返回值是一个对象
            ·mapDispatchToProps：映射操作状态的方法。返回值是一个对象
    3 备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
    4 备注：mapDispatchToProps 也可以是一个对象

## 5 求和案例 react-redux优化
    1 容器组件和UI组件整合成一个文件
    2 无需自己给容器组件传递store， 给<App/>包裹一个<Provider store={store}>
    3 使用了react-redux后再也不用自己检测redux中状态的改变了， 容器组件可以自动完成这个工作
    4 mapDispatchToProps也可以简单的写成一个对象
    5 一个组件要和redux 打交道 要经过哪几步？
        1 定义好UI组件 --- 不暴露
        2 引入connect生产一个容器组件，并暴露，写法如下：
            connect(
                state => ({key:value})//映射状态
                {key:xxxxAction}//映射操作状态的方法
            )(UI组件)
        3 在UI组件中通过this.props.xxxxxxx读取和操作状态

## 6 求和案例 react-redux数据共享版
    1 定义一个Psercon组件，和Count组件通过redux共享数据
    2 为Person组件编号：reducer action 配置constant常量
    3 重点 Person的reducer和Count的Reducer要使用combineReducers进行合并
        合并后的种状态是一个对象 
    4 交给store的是总reducer 最后注意在组件中取出状态的时候 记得 取到位

## 7 求和案例 react-redux开发者工具的使用
    1 yarn add redux-devtools-extension
    2 store中进行配置
        import {composeWithDevTools} from 'redux-devtools-extension'
        const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

## 8 求和案例 react-redux最终版
    1 所有变量名字要规范 尽量出发对象的简写形式
    2 reducers文件加中 编写index.js专门用于汇总并暴露所有的reducer

## 9 项目打包
    使用终端执行 npm run build
        会在你的根目录新增一个build 的文件夹  该文件夹是react打包好的文件夹
        文件夹里的文件是react生成的源js文件 你得放到Node.js 或者 放在 Java的服务器里运行
    还有一种方法是 安装一个 插件库
        npm i serve -g  
        安装后在终端输入
        serve build  <=  具体文件夹

    下方演示

    PS C:\Users\Administrator\Desktop\redux_test> serve build

   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:            http://localhost:3000      │
   │   - On Your Network:  http://172.20.160.1:3000   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                                  │
   └──────────────────────────────────────────────────┘
    
    这样就可以预览你的React网站了