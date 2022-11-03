import { add } from "../src/index";

describe("add()のテスト", () => {
  it("3 + 5が8になること", () => {
    expect(add(3, 5)).toBe(8);
  });
});
