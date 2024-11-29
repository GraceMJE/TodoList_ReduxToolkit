import React from 'react';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
    return (
        <div className="AppContainer">
            <header className="App-header">
                <h1>My Todo List 🗒️</h1>
            </header>
            <InputTodo />
            <div className="ListContainer">
                <TodoList />
            </div>
        </div>
    );
}
