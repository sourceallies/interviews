cmake_minimum_required(VERSION 3.14)
project(interview)

set(CMAKE_CXX_STANDARD 26)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.14.0.zip
  DOWNLOAD_EXTRACT_TIMESTAMP TRUE
)
FetchContent_MakeAvailable(googletest)

add_executable(
  main 
  main.cpp
)

# Quickstart Used Guide for Gtest in CMAKE
# https://google.github.io/googletest/quickstart-cmake.html
enable_testing()

add_executable(
  main_test 
  main_test.cpp
)

target_link_libraries(
  main_test 
  GTest::gtest_main
)

include(GoogleTest)
gtest_discover_tests(main_test)