import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const output = new URL("../public/og-card.png", import.meta.url);

const card = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#e6eceb"/>
  <g stroke="#101817" stroke-opacity="0.08">
    ${Array.from({ length: 11 }, (_, index) => `<path d="M${index * 120} 0V630"/>`).join("")}
    ${Array.from({ length: 6 }, (_, index) => `<path d="M0 ${index * 126}H1200"/>`).join("")}
  </g>
  <rect x="72" y="64" width="54" height="54" fill="#101817"/>
  <text x="99" y="98" fill="#f6f9f8" font-family="monospace" font-size="18" text-anchor="middle">DC</text>
  <text x="150" y="99" fill="#101817" font-family="Arial, sans-serif" font-size="24" font-weight="700">DARREN YUE CAO</text>

  <text x="72" y="260" fill="#101817" font-family="Arial, sans-serif" font-size="96" font-weight="750" letter-spacing="-5">DARREN CAO</text>
  <text x="74" y="330" fill="#465451" font-family="Arial, sans-serif" font-size="28">Software engineer · Melbourne, Australia</text>
  <text x="74" y="400" fill="#0a5d83" font-family="monospace" font-size="20" letter-spacing="2">PERSONAL SITE IN PROGRESS</text>

  <path d="M74 512H400V464H660V544H926V492H1125" fill="none" stroke="#0a5d83" stroke-width="4" stroke-dasharray="14 10"/>
  <circle cx="74" cy="512" r="10" fill="#ed4a2b"/>
  <circle cx="400" cy="464" r="9" fill="#f6f9f8" stroke="#0a5d83" stroke-width="4"/>
  <circle cx="660" cy="544" r="9" fill="#f6f9f8" stroke="#0a5d83" stroke-width="4"/>
  <circle cx="926" cy="492" r="9" fill="#f6f9f8" stroke="#0a5d83" stroke-width="4"/>
  <circle cx="1125" cy="492" r="13" fill="#ed4a2b"/>
  <text x="74" y="588" fill="#465451" font-family="monospace" font-size="16" letter-spacing="2">DARRENCY.COM / MELBOURNE, AUSTRALIA</text>
</svg>`;

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await sharp(Buffer.from(card)).png().toFile(fileURLToPath(output));
