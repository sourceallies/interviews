import { hello } from "./index";

describe("Hello", () => {
  it("should print `Hello World`", () => {
    expect('Hello World').toBe(hello("World"));
  });
});

describe("Fails", () => {
  it("should fail", () => {
    expect(true).toBe(false);
  })
})
