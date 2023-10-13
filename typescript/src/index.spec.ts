import { hello } from "./index";

describe("Hello", () => {
  it("should print `Hello World`", () => {
    expect('Hello World').toBe(hello("World"));
  });
});
