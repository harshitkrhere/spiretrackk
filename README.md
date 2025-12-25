# SpireTrack - Todo Application

A beautiful, feature-rich todo application built with React and Vite. Organize your tasks, achieve your goals with an elegant and intuitive interface.

## 🌟 Features

- ✅ **Add/Edit/Delete Tasks** - Full CRUD operations for your todos
- ✓ **Mark as Complete** - Track completed tasks with visual indicators
- 🔍 **Smart Filtering** - Filter by All, Active, or Completed tasks
- 💾 **Local Storage** - All your tasks are automatically saved locally
- 📊 **Progress Tracking** - Visual progress bar and statistics
- 📱 **Fully Responsive** - Beautiful design on mobile, tablet, and desktop
- ✨ **Modern UI** - Glassmorphism design with smooth animations
- 🎨 **Custom Styling** - Beautiful gradient backgrounds and intuitive interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/harshitkrhere/spiretrackk.git
cd spiretrackk-todo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

## 🛠️ Available Scripts

- **`npm run dev`** - Start the development server
- **`npm run build`** - Build the app for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📦 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and gradients
- **Local Storage API** - Data persistence

## 🎨 Design Features

- Beautiful gradient purple/pink theme
- Smooth animations and transitions
- Intuitive empty states
- Color-coded action buttons
- Progress visualization
- Mobile-first responsive design

## 📂 Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx      # Task input form
│   ├── TodoList.jsx      # Task list container
│   ├── TodoItem.jsx      # Individual task component
│   └── TodoFilter.jsx    # Filter buttons
├── styles/
│   ├── TodoForm.css      # Form styling
│   ├── TodoList.css      # List styling
│   ├── TodoItem.css      # Item styling
│   └── TodoFilter.css    # Filter styling
├── App.jsx               # Main app component
├── App.css               # App-level styling
├── index.css             # Global styling
└── main.jsx              # React entry point
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Vite and build your app
4. Your app will be live in seconds!

```bash
# The project includes vercel.json for optimal Vercel configuration
```

## 💡 Usage Tips

- **Add Tasks**: Type in the input field and click "Add Task" or press Enter
- **Edit Tasks**: Click the ✏️ button, modify the text, and save with ✓
- **Delete Tasks**: Click the 🗑️ button to remove a task
- **Track Progress**: Watch your progress bar fill as you complete tasks
- **Filter Tasks**: Use the filter buttons to view specific task categories

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

Created by Harshit - [GitHub Profile](https://github.com/harshitkrhere)

---

**Made with ❤️ for productivity**

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
