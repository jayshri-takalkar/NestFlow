import React from "react";

function Notes() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <textarea className="w-full h-40 p-2 border" placeholder="Write your notes here..."></textarea>
        </div>
    );
}

export default Notes;