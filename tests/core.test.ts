import { describe, it, expect } from "vitest";
import { PageAgent } from "../src/core.js";
describe("PageAgent", () => {
  it("init", () => { expect(new PageAgent().getStats().ops).toBe(0); });
  it("op", async () => { const c = new PageAgent(); await c.navigate(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new PageAgent(); await c.navigate(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
