#!/usr/bin/env bash

pip install inquirer

# Since we need to present a user interface through stdout, we write
# output to fd 3, redirect it to a file, and cat that out to a variable.
python ./languageSelect.py 3> /tmp/language_select_out
SELECTION=$(cat /tmp/language_select_out)

cd $SELECTION
make init
make verify

rm /tmp/language_select_out
