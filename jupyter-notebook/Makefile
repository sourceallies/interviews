init:
	pip3 --disable-pip-version-check --no-cache-dir install poetry;
	poetry install;

verify:
	poetry run jupyter nbconvert --execute --to notebook --inplace main.ipynb

run:
	poetry run jupyter nbconvert --execute --to notebook --inplace main.ipynb

.PHONY: verify init run

