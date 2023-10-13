verify:
	poetry run coverage run --source py_check -m pytest tests;
	poetry run coverage report;

run:
	python py_check/main.py

init:
	pip3 --disable-pip-version-check --no-cache-dir install poetry;
	poetry install;

.PHONY: verify run init