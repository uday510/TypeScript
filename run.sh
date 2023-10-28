#!/bin/bash

# Compile TypeScript using tsc
tsc

# Check if the compilation was successful
if [ $? -eq 0 ]; then
    # If successful, run the compiled JavaScript file using node
    node dist/generics.js
else
    echo "TypeScript compilation failed."
fi
