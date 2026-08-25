import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const output = new URL("../public/og-card.png", import.meta.url);

const card = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>

  <text x="72" y="190" fill="#0f172a" font-family="Arial, sans-serif" font-size="78" font-weight="700" letter-spacing="-2">Darren Yue Cao</text>
  <text x="74" y="246" fill="#0f172a" font-family="Arial, sans-serif" font-size="28" font-weight="500">Software &amp; AI Engineer</text>
  <text x="74" y="320" fill="#3f5168" font-family="Arial, sans-serif" font-size="25">AI agents · Regulatory intelligence · Data platforms</text>

  <path d="M74 440H1126" stroke="#e2e8f0" stroke-width="2"/>
  ${Array.from({ length: 13 }, (_, index) => `<path d="M${74 + index * 87.67} 440V458" stroke="#64748b" stroke-width="2"/>`).join("")}
  <text x="74" y="548" fill="#64748b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="2">DARRENCY.COM</text>
  <text x="1126" y="548" fill="#64748b" font-family="monospace" font-size="17" font-weight="700" letter-spacing="2" text-anchor="end">MELBOURNE, AUSTRALIA</text>
</svg>`;

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await sharp(Buffer.from(card)).png().toFile(fileURLToPath(output));
