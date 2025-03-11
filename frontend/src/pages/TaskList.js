import React from "react";

function TaskList() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <ul>
                <li className="border p-2 mb-2">Task 1</li>
                <li className="border p-2 mb-2">Task 2</li>
                <li className="border p-2 mb-2">Task 3</li>
            </ul>
        </div>
    );
}

export default TaskList;