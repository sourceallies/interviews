from py_check.main import get_bar, get_baz, get_foo


def test_get_foo_should_return_foo():
    assert get_foo() == "foo"


def test_get_bar_should_return_bar():
    assert get_bar() == "bar"


def test_get_baz_should_return_baz():
    assert get_baz() == "baz"