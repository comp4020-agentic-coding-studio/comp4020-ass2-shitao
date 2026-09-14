import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// Mirrors data-integrity.test.ts: read what the build actually emitted,
// rather than re-deriving the same facts from source content.
interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("assignment 2 brief", () => {
  it("keeps the three digits assigned to this repo", () => {
    // The repo was provisioned as SLOP1450; only the level digit is ours to
    // change, per src/course-config.ts.
    expect(api.course.code).toMatch(/^SLOP[1234689]450$/);
  });

  it("sums published assessment weights to 100", () => {
    // The content schema only checks that one assessment's own marking
    // criteria sum to 100 — nothing checks the weights across the whole
    // collection, which is the spec's actual "weightings must total 100%"
    // requirement.
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const total = assessments.reduce((sum, node) => sum + (Number(node.meta?.weight) || 0), 0);
    expect(total).toBe(100);
  });

  it("links at least one lecture to a slide deck that actually built", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    const withSlides = lectures.filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
    for (const lecture of withSlides) {
      const slidesPath = String(lecture.meta?.slides);
      expect(existsSync(resolve(`dist${slidesPath}index.html`)), `${lecture.id}'s deck didn't build`).toBe(
        true,
      );
    }
  });
});
