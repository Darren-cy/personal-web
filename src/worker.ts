const CANONICAL_HOST = "darrency.com";
const LEGACY_HOST = "www.darrency.com";

const SECURITY_HEADERS = {
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
} as const;

export function canonicalRedirectUrl(request: Request): string | null {
  const url = new URL(request.url);

  if (url.hostname !== LEGACY_HOST) {
    return null;
  }

  url.hostname = CANONICAL_HOST;
  url.protocol = "https:";
  url.port = "";
  return url.toString();
}

export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env): Promise<Response> {
    const redirectUrl = canonicalRedirectUrl(request);

    if (redirectUrl) {
      return withSecurityHeaders(
        new Response(null, {
          status: 308,
          headers: { Location: redirectUrl },
        }),
      );
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSecurityHeaders(assetResponse);
  },
} satisfies ExportedHandler<Env>;

