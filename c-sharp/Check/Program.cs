using System;

namespace Check
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"{Generator.GetGreeting()} {Generator.GetName()}");
        }
    }
}
