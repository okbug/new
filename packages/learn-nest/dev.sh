#!/bin/bash

# 如果有传PORT就用port
# 用法 ./dev.sh 3002
if [ $1 != '' ]
then
    PORT=$1 nest start --watch
else
    PORT=3000 nest start --watch
fi