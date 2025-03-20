#!/bin/bash

# Find the process using port 8080
PID=$(lsof -ti :8080)

# Check if a process was found
if [ -z "$PID" ]; then
    echo "No process is running on port 8080."
else
    echo "Stopping process running on port 8080 (PID: $PID)..."
    sudo kill -9 $PID
    echo "Process $PID terminated."
fi
