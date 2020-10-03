#!/usr/bin/env bash

XXXX="person" --> folder you created under /var/www"
DROPLET_URL="https://freddybongwong.dk/person/api/person/all"

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$XXXX

