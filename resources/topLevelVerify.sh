#!/bin/bash
set -e

for dir in */
do    
    if [ "$dir" == "resources/" ]; then
        continue
    fi

    make init -C "$dir"  
    make verify -C "$dir"
done
