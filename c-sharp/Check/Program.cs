using System;

namespace Check;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine($"{Generator.GetGreeting()} {Generator.GetName()}");
    }
}
