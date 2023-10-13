verify:
	poetry run coverage run --source py_check -m pytest tests;
	poetry run coverage report;

run:
	python py_check/main.py

init:
	./setup.sh;
	poetry install;

.PHONY: verify run init