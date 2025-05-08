import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { getCategoryIcon, categories } from '../utils/categoryUtils';

const GroceryList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('groceryList');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      category: category || 'other',
      quantity: 1,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateQuantity = (id, change) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const newQuantity = Math.max(1, todo.quantity + change);
          return { ...todo, quantity: newQuantity };
        }
        return todo;
      })
    );
  };

  const getCategoryCount = (category) => {
    return todos.filter(todo => !todo.completed && todo.category === category).length;
  };

  // Group todos by category
  const groupedTodos = todos.reduce((acc, todo) => {
    if (!acc[todo.category]) {
      acc[todo.category] = [];
    }
    acc[todo.category].push(todo);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2 text-green-600">GroceryGenius 🧠</h1>
      <p className="text-center text-gray-600 mb-8">Your smart shopping companion! 🛒</p>
      
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {categories.map((category) => (
            <div key={category.id} className={`${category.bgColor} p-3 rounded-lg text-center`}>
              <span className={`${category.textColor} font-medium`}>{category.name}</span>
              <p className="text-3xl mt-1">{getCategoryIcon(category.id)}</p>
            </div>
          ))}
        </div>

        <TodoForm onAdd={addTodo} categories={categories} />
        <div className="mt-6">
          {todos.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">Your grocery list is empty! Add some items to get started.</p>
              <p className="text-sm mt-2">💡 Tip: Try adding items by category for better organization!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {categories.map((category) => {
                const categoryTodos = groupedTodos[category.id] || [];
                if (categoryTodos.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-2">
                    <div className={`${category.bgColor} px-4 py-2 rounded-lg flex items-center gap-2`}>
                      <span className={`${category.textColor} font-medium`}>
                        {getCategoryIcon(category.id)} {category.name}
                      </span>
                      <span className={`${category.textColor} text-sm`}>
                        ({categoryTodos.length} {categoryTodos.length === 1 ? 'item' : 'items'})
                      </span>
                    </div>
                    <div className="space-y-2">
                      {categoryTodos.map((todo) => (
                        <Todo
                          key={todo.id}
                          todo={todo}
                          onToggle={toggleTodo}
                          onDelete={deleteTodo}
                          onUpdateQuantity={updateQuantity}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroceryList; 