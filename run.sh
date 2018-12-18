#!/usr/bin/env bash

for file in slekta_fra_brandal/*.tif; do 
  echo "$file"
  time tesseract -l nor "$file" "out/$(basename $file)"
done
