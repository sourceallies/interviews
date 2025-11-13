namespace UnitTests;

using Application;

public class CarTests
{
    [Fact]
    public void GivenACar_WhenStarted_ThenEngineIsRunning()
    {
        Car car = new();

        car.Start();
        
        Assert.True(car.IsRunning);
    }
}