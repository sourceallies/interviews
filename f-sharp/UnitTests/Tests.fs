module Tests

open Xunit

[<Fact>]
let ``Greet returns formatted message`` () =
    let result = Greeter.greet "World"

    Assert.Equal("Hello, World!", result)
