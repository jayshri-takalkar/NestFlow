import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashBoard';
import TaskList from './pages/TaskList';
import Calendar from './pages/Calendar';
import ShoppingList from './pages/ShoppingList';
import Notes from './pages/Notes';
import Navbar from './components/Navbar';
import './styles/globals.css';
import TodoApp from "./pages/TodoApp";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/notes" element={<Notes />} />
          <Route path="/todolist" element={<TodoApp items={[{ id: 1, name: "Task 1" }]} />} />
      </Routes>
    </Router>
  );
}