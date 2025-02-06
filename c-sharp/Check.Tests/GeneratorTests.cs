using Microsoft.VisualStudio.TestPlatform.TestHost;
using Xunit;

namespace Check.Tests
{
    public class GeneratorTests
    {
        [Fact]
        public void GetGreeting_ReturnsCorrectGreeting()
        {
            Assert.Equal("Hello", Generator.GetGreeting());
        }

        [Fact]
        public void Add_Given1Plus3_Returns4()
        {
            // Assert.Equal("1 3", );
            //Arrange
            var given = "1 3";
            //Act
            var result = Calculator.Add(given);
            //Assert
            //Expect first, then actual
            Assert.Equal(4, result);
        }
        
        [Fact]
        public void Add_Given1Plus3PlusJosh_Returns5()
        {
            // Assert.Equal("1 3", );
            //Arrange
            var given = "1 3 josh";
            //Act
            var result = Calculator.Add(given);
            //Assert
            //Expect first, then actual
            Assert.Equal(5, result);
        }

        [Fact]
        public void Add_Given1Plus3PlusJoshPlusJoe_Returns6()
        {
            // Assert.Equal("1 3", );
            //Arrange
            var given = "1 3 josh,joe";
            //Act
            var result = Calculator.Add(given);
            //Assert
            //Expect first, then actual
            Assert.Equal(6, result);
        }

        [Fact]
        public void Add_Given1Plus3PlusNames_Returns7()
        {
            // Assert.Equal("1 3", );
            //Arrange
            var given = "1 3 josh,joe ryan";
            //Act
            var result = Calculator.Add(given);
            //Assert
            //Expect first, then actual
            Assert.Equal(7, result);
        }

        [Fact]
        public void Add_Given1Minus3Minus2_Returns2()
        {
            //Arrange
            var given = "1 4--2";
            //Act
            var result = Calculator.Add(given);
            //Assert
            //Expect first, then actual
            Assert.Equal(3, result);
        }

        [Fact]
        public void Add_GivenNumbersWithDelimiters_Returns2()
        {
            //Arrange
            var numbers = "1 4.2,3";
            var delimiters = new char[]{' ',',','.'};
            //Act
            var result = Calculator.Add(numbers, delimiters);
            //Assert
            //Expect first, then actual
            Assert.Equal(10, result);
        }
    }
}
