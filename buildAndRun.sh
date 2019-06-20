#!/bin/bash

echo "Usage buildAndRun.sh oldVersion newVersion"

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

oldVersion=$1
newVersion=$2

##Find way to get the version from regex
echo "-----------"
echo "Going From Version"
echo $oldVersion

echo "-----------"
echo "To"
echo $newVersion


docker build -t catbreed_web:$newVersion .

docker stop catbreed
docker rm catbreed
docker rmi catbreed_web:$oldVersion

docker run -d -p 81:3050 --name catbreed catbreed_web:$newVersion


# if [ $3 == "push" ];then
    # docker push b4lddocker/catbreed_web:$newVersion
# fi

echo "DONE-----"



