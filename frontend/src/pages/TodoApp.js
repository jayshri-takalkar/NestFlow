import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card, CardContent } from "../components/ui/Card";
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Select, SelectItem } from "../components/ui/Select";
import { Trash2, PlusCircle, List } from "lucide-react";

const Task = ({ task, index, moveTask, updateStatus, removeTask }) => {
    const [, ref] = useDrag({
        type: "TASK",
        item: { index },
    });

    const [, drop] = useDrop({
        accept: "TASK",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <Card ref={(node) => ref(drop(node))} className="p-4 mb-2 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all flex justify-between items-center">
            <CardContent>
                <p className="text-lg font-semibold">{task.title}</p>
                <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
                <p className="text-sm text-gray-600">Priority: <span className={`font-bold ${task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>{task.priority}</span></p>
                <p className="text-sm text-gray-600">Assigned to: {task.assignee}</p>
                <Select value={task.status} onChange={(e) => updateStatus(index, e.target.value)} className="mt-2">
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Done">Done</SelectItem>
                </Select>
            </CardContent>
            <Button variant="destructive" size="icon" onClick={() => removeTask(index)}><Trash2 size={16} /></Button>
        </Card>
    );
};

export default function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", deadline: "", priority: "Low", assignee: "", status: "Pending" });

    const addTask = () => {
        if (newTask.title.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask({ title: "", deadline: "", priority: "Low", assignee: "", status: "Pending" });
        }
    };

    const moveTask = (fromIndex, toIndex) => {
        const updatedTasks = [...tasks];
        const [movedTask] = updatedTasks.splice(fromIndex, 1);
        updatedTasks.splice(toIndex, 0, movedTask);
        setTasks(updatedTasks);
    };

    const updateStatus = (index, status) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].status = status;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg mt-10">
                <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">Family TODO List</h1>
                <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input placeholder="Task Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
                        <Input type="date" value={newTask.deadline} onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })} />
                        <Select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
                            <SelectItem value="Low">Low</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="High">High</SelectItem>
                        </Select>
                        <Input placeholder="Assign to" value={newTask.assignee} onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })} />
                    </div>
                    <Button onClick={addTask} className="mt-4 w-full flex items-center gap-2"><PlusCircle size={16} /> Add Task</Button>
                </div>
                <div>
                    {tasks.length === 0 ? (
                        <p className="text-gray-500 text-center">No tasks added yet.</p>
                    ) : (
                        tasks.map((task, index) => (
                            <Task key={index} task={task} index={index} moveTask={moveTask} updateStatus={updateStatus} removeTask={removeTask} />
                        ))
                    )}
                </div>
            </div>
        </DndProvider>
    );
}
