using System;
using System.Collections.Generic;
using System.Linq;

namespace Check
{
    class Program
    {
        static void Main(string[] args)
        {
            var numberParams = "1 3";
            var result = Calculator.Add(numberParams);
        }

        
    }

    public static class Calculator
    {
        public static int Add(string numbers, char[] separators = null)
        {
            numbers = numbers.Replace("--"," -");
            separators ??= new char[]{' ',','};
            List<string> numberList = numbers.Split(separators).ToList();
            List<int> intList = numberList.Select(x =>
            {     
                int value;
                bool isInteger = int.TryParse(x, out value);
                if (!isInteger)
                {
                    value = 1;
                }
                return value;
            }).ToList();
            return intList.Sum();
        }
    }
}
