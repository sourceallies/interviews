# Interview Check (Python)
Python project for verifying interview setup

For more information about our interview setup, please refer to the following documentation:
https://github.com/sourceallies/interviews/blob/main/docs/interview-environment.md

### Requirements
 - docker
 - vscode

### Open in dev container
1. Clone this repository
2. Open the directory in VS Code
3. Click the "Open a Remote Window" icon on the bottom-left corner of VS Code
4. Select "Reopen in Container"

## The Problem
There some failing tests in this project and a broken import in `test_main.py`. Fix the import error and then run the tests as follows:

```
$ make test
```

## Acceptance Criteria
Fix the broken import and make the tests pass. Only update code in the `main.py` or `test_main.py` files.

When you run the application, you should see `Hello World!` printed to the console. Run the application as follows:

```
$ make run
```

## Future Enhancements
Update the application so that it receives the name and greeting via command line args.