import { hello } from "../src/hello_world";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});