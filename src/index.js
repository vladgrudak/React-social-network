import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'My first Post', likesCount: 10},
    {id: 2, message: 'Hello World!', likesCount: 11},
    {id: 3, message: 'Sosisochka krasivaya', likesCount: 12},
    {id: 4, message: 'Sochnaya kukolka', likesCount: 9},
    {id: 5, message: 'Marinovannyi ogurets!', likesCount: 16},
]

let dialogs = [
    {id: 1, name: 'Vlad'},
    {id: 2, name: 'Nelly'},
    {id: 3, name: 'Serega'},
    {id: 4, name: 'Nastya'},
    {id: 5, name: 'Vova'},
]

let messages = [
    {id: 1, message: 'Ты - лучший, у тебя всё получится!'},
    {id: 2, message: 'Конечно!'},
    {id: 3, message: 'Я очень рад!'},
    {id: 4, message: 'И я очень рад))'},
    {id: 5, message: ':-D'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
