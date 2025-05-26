
import React, { useState } from 'react';
import { Check, X, Edit3, Trash2 } from 'lucide-react';
import type { Todo } from './TodoApp';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (editValue.trim() && editValue !== todo.text) {
      onEdit(todo.id, editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl ${
      todo.completed ? 'opacity-75' : ''
    }`}>
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }`}
        >
          {todo.completed && <Check size={16} />}
        </button>

        {/* Todo Text */}
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={handleEdit}
              onKeyDown={handleKeyPress}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              autoFocus
            />
          ) : (
            <div
              className={`text-lg cursor-pointer ${
                todo.completed
                  ? 'line-through text-gray-500'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
              onClick={() => !todo.completed && setIsEditing(true)}
            >
              {todo.text}
            </div>
          )}
          <div className="text-sm text-gray-400 mt-1">
            {todo.createdAt.toLocaleDateString()} at {todo.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {!isEditing && !todo.completed && (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              <Edit3 size={16} />
            </button>
          )}
          
          {isEditing ? (
            <div className="flex gap-1">
              <button
                onClick={handleEdit}
                className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-all duration-200"
              >
                <Check size={16} />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
