namespace UnitTests;

using Application;

public class GreetingTests
{
    [Fact]
    public void GreetReturnsFormattedMessage()
    {
        Greeter greeter = new();

        var result = greeter.Greet("World");

        Assert.Equal("Hello, World!", result);
    }
}