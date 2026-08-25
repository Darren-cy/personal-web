import { describe, expect, it } from "vitest";
import { canonicalRedirectUrl, withSecurityHeaders } from "./worker";

describe("canonicalRedirectUrl", () => {
  it("redirects www while preserving path and query", () => {
    const result = canonicalRedirectUrl(
      new Request("https://www.darrency.com/systems?source=profile"),
    );

    expect(result).toBe("https://darrency.com/systems?source=profile");
  });

  it("does not redirect the canonical host", () => {
    const result = canonicalRedirectUrl(new Request("https://darrency.com/"));
    expect(result).toBeNull();
  });
});

describe("withSecurityHeaders", () => {
  it("preserves the response while adding security headers", async () => {
    const secured = withSecurityHeaders(
      new Response("profile", {
        status: 201,
        headers: { "Content-Type": "text/plain" },
      }),
    );

    expect(secured.status).toBe(201);
    expect(secured.headers.get("Content-Type")).toBe("text/plain");
    expect(secured.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(await secured.text()).toBe("profile");
  });
});

