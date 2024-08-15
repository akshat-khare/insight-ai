#!/bin/bash

echo "=== package.json ==="
cat package.json

echo -e "\n\n=== src/index.js ==="
cat src/index.js

echo -e "\n\n=== src/App.js ==="
cat src/App.js

echo -e "\n\n=== src/index.css ==="
cat src/index.css

echo -e "\n\n=== public/index.html ==="
cat public/index.html

echo -e "\n\n=== tailwind.config.js ==="
if [ -f tailwind.config.js ]; then
    cat tailwind.config.js
else
    echo "File not found"
fi