from dataclasses import dataclass


@dataclass
class FooBar:
    foo: str = "foo"
    bar: str = "bar"
    baz: str = "baz"


def get_foo() -> str:
    return FooBar.foo


def get_bar() -> str:
    return FooBar.bar


def get_baz() -> str:
    return FooBar.baz


if __name__ == "__main__":
    print("\n\nHello World!\n\n")
