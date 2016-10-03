#!/bin/bash

cd test/wdio/$1

echo "Running test using '$1'' framework"
../../../node_modules/.bin/wdio
