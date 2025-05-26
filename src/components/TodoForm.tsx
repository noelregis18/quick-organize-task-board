
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="w-full px-6 py-4 text-lg bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl pr-12"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Plus size={24} />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
        >
          <Plus size={20} />
          Add
        </button>
      </div>
    </form>
  );
};
