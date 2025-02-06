using Xunit;

namespace Check.Tests;

public class GeneratorTests
{
    [Fact]
    public void GetGreeting_ReturnsCorrectGreeting()
    {
        Assert.Equal("Hello", Generator.GetGreeting());
    }

    [Fact]
    public void GetName_ReturnsCorrectName()
    {
        Assert.Equal("World", Generator.GetName());
    }
}
