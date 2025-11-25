from app.main import greet


def test_greet_returns_greeting():
    assert greet("World") == "Hello, World!"
