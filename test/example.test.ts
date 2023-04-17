import { sum } from "../srv/example";

describe("example test", () => {
  it("should calc sum of 1 + 1", async () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });

  it("should calc sum of 2 + 3", async () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
})