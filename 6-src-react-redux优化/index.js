import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//引入store
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 给所有容器组件传递store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// import React from 'react';
// import {createRoot} from 'react-dom/client';//react-dom/client
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);