#!/usr/bin/env python
import os
import inquirer

def is_language_dir(path):
    """ determines if a directory represents a valid language for the user to select """
    if not os.path.isdir(path):
        return False
    contents = os.listdir(path)
    return "Makefile" in contents

lang_dirs = list(filter(is_language_dir, os.listdir(".")))

questions = [
  inquirer.List("dir",
                message="Select your Language/Framework",
                choices=lang_dirs,
            ),
]
answers = inquirer.prompt(questions)

# Write to file descriptor 3 for output, since we need stdout for user interaction
with os.fdopen(3, "w") as fd_file:
    fd_file.write(answers["dir"])
    fd_file.close()