#!/bin/bash
docker stop nchan
docker rm nchan
docker build -t nchan .
docker run -d -p 3001:80 --name nchan nchan -g 'daemon off;'