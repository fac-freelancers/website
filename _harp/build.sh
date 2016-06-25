#!/bin/bash

dir=$(pwd)

if [[ $dir == *"/_harp" ]]; then
  cd ..;
fi

files=$(ls _harp)

if [[ $files == *"build.sh"* ]]; then
  echo "compiling harp";
  harp compile _harp ./ && cp _harp/README.md _harp/LICENSE .
  echo "compiled";
  echo "opening in browser";
  open index.html;
else
  echo "cannot find script! cd website !";
fi
