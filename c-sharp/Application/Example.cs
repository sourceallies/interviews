namespace Application;

public class Car
{
    public bool IsRunning { get; private set; } = false;

    public void Start()
    {
        IsRunning = true;
    }
}