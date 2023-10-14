#!/usr/bin/env bash

# To be run from project root

pip install inquirer

# Since we need to present a user interface through stdout, we write
# output to fd 3, redirect it to a file, and cat that out to a variable.
python resources/languageSelect.py 3> /tmp/language_select_out
# We use head to ensure that we never read more than one line.
SELECTION=$(head -1 /tmp/language_select_out)

cd $SELECTION
make init
make verify

rm /tmp/language_select_out
