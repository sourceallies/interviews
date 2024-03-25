init:
	pip3 --disable-pip-version-check --no-cache-dir install poetry;
	poetry install;

verify:
	jupyter nbconvert --execute --to notebook --inplace main.ipynb

run:
	jupyter nbconvert --execute --to notebook --inplace main.ipynb

.PHONY: verify init