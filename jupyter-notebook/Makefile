init:
	pip3 --disable-pip-version-check install jupyter jupyter_core nbconvert

verify:
	jupyter nbconvert --execute --to notebook --inplace main.ipynb

run:
	jupyter nbconvert --execute --to notebook --inplace main.ipynb

.PHONY: verify init run
