#define TESTING
#include "main.cpp"

#include <gtest/gtest.h>

TEST(GreetTest, ReturnsGreeting) {
    EXPECT_EQ(greet(), "Hello, World!");
}
