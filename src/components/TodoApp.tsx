
import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';
import { CheckCircle2, ListTodo } from 'lucide-react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        setTodos(parsedTodos);
      } catch (error) {
        console.error('Error loading todos from localStorage:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, text: newText.trim() } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg">
              <ListTodo size={32} />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Todo List
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <TodoForm onAddTodo={addTodo} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-orange-600">{activeCount}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <div className="text-2xl font-bold text-green-600">{completedCount}</div>
            <div className="text-sm text-gray-600">Complete</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {(['all', 'active', 'completed'] as const).map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-3 mb-6">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-gray-400 mb-4">
                <CheckCircle2 size={64} className="mx-auto" />
              </div>
              <p className="text-gray-500 text-lg">
                {filter === 'completed' && todos.length > 0
                  ? 'No completed tasks yet'
                  : filter === 'active' && todos.length > 0
                  ? 'No active tasks - great job!'
                  : 'No tasks yet. Add one above to get started!'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo, index) => (
              <div
                key={todo.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <TodoItem
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              </div>
            ))
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="text-center animate-fade-in">
            <button
              onClick={clearCompleted}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Clear Completed ({completedCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
