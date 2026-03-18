import { describe, it, expect } from "vitest";
import { Pagecontrol } from "../src/core.js";

describe("Pagecontrol integration", () => {
  it("handles concurrent ops", async () => {
    const c = new Pagecontrol();
    await Promise.all([c.navigate({a:1}), c.navigate({b:2}), c.navigate({c:3})]);
    expect(c.getStats().ops).toBe(3);
  });
  it("returns service name", async () => {
    const c = new Pagecontrol();
    const r = await c.navigate();
    expect(r.service).toBe("pagecontrol");
  });
  it("handles 100 ops", async () => {
    const c = new Pagecontrol();
    for (let i = 0; i < 100; i++) await c.navigate({i});
    expect(c.getStats().ops).toBe(100);
  });
});
