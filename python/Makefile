verify:
	poetry run pytest -v tests/test_vending_machine.py


run:
	python py_check/main.py

init:
	pip3 --disable-pip-version-check --no-cache-dir install poetry;
	poetry install;

.PHONY: verify run init