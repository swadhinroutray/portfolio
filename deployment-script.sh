#!/bin/bash

npm run build

cp -r  build /var/www/

service nginx restart
