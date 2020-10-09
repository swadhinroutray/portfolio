#!/bin/bash

echo "Creating Production Build"
npm run build

echo "Copying build folder"
cp -r  build /var/www/

service nginx restart

echo "Production build deployed"