init:
	cmake -B build -S .
	cmake --build build

run: init
	./build/main

verify: init
	cd build && ctest --output-on-failure

.PHONY: init run verify