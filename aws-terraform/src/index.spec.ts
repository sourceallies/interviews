import { greet } from "./index";

describe("greet", () => {
  it("should greet by name", () => {
    expect(greet("World")).toBe("Hello, World!");
  });
});
