import React from 'react';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
