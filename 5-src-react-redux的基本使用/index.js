import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//监测redux中状态的改变 如redux的状态发生了改变 那么重新渲染App组件
store.subscribe(()=>{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

// import React from 'react';
// import {createRoot} from 'react-dom/client';//react-dom/client
// import App from './App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App/>);