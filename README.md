
# Todo List App

A modern, responsive todo list application built with React, TypeScript, and Tailwind CSS. This app helps you stay organized and manage your daily tasks efficiently.

## Features

- ✅ **Add Tasks**: Easily add new tasks with a clean input interface
- ✏️ **Edit Tasks**: Click on any task to edit it inline
- ✅ **Mark Complete**: Toggle tasks between active and completed states
- 🗑️ **Delete Tasks**: Remove tasks you no longer need
- 🔍 **Filter Tasks**: View all, active, or completed tasks
- 📊 **Task Statistics**: See your progress with total, active, and completed counts
- 💾 **Local Storage**: Your tasks are automatically saved and persist between sessions
- 🎨 **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **Local Storage API** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── TodoApp.tsx      # Main application component
│   ├── TodoForm.tsx     # Form for adding new tasks
│   └── TodoItem.tsx     # Individual task item component
├── pages/
│   └── Index.tsx        # Main page component
├── App.tsx              # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter
3. Your task will appear in the list below

### Managing Tasks
- **Complete**: Click the circle button next to a task to mark it as complete
- **Edit**: Click on the task text to edit it inline
- **Delete**: Click the trash icon to remove a task
- **Filter**: Use the filter buttons (All, Active, Completed) to view specific task types

### Data Persistence
All your tasks are automatically saved to your browser's local storage, so they'll be there when you return to the app.

## Customization

The app uses Tailwind CSS for styling, making it easy to customize:

- **Colors**: Modify the gradient backgrounds and accent colors in the component files
- **Animations**: Adjust the fade-in animations and transitions
- **Layout**: Change spacing, sizing, and responsive breakpoints

## Browser Compatibility

This app works in all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Designed and Developed by Noel Regis**

---

Built with ❤️ using React and TypeScript
