#include <print>
#include <string>

std::string greet() {
    return std::string("Hello, World!");
}

#ifndef TESTING
int main() {
    std::println("{}", greet());
    return 0;
}
#endif