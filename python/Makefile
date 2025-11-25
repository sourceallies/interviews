verify:
	poetry run coverage run --source app -m pytest tests;
	poetry run coverage report;

run:
	python app/main.py

init:
	pip3 --disable-pip-version-check --no-cache-dir install poetry;
	poetry config virtualenvs.in-project true;
	poetry install;

.PHONY: verify run init