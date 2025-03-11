import React from "react";

function ShoppingList() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ul>
                <li className="border p-2 mb-2">Milk</li>
                <li className="border p-2 mb-2">Eggs</li>
                <li className="border p-2 mb-2">Bread</li>
            </ul>
        </div>
    );
}

export default ShoppingList;