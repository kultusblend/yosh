// Generate public/og-default.png (1200×630) from a hand-tuned SVG.
// Run via: npm run gen:og
//
// Note on fonts: librsvg (Sharp's SVG text renderer) uses system fonts,
// not webfonts from node_modules. On macOS the Inria Serif fallback is
// Georgia, and IBM Plex Mono falls back to Menlo. The output is close
// enough to the site identity at OG-thumbnail scale (~300px wide on
// social cards). If exact font fidelity matters, swap the SVG for a
// hand-designed PNG made in Figma/Canva and place at public/og-default.png.

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Tokens mirror src/styles/global.css (Editorial Brutalism / Dossier).
const C = {
	bg: '#f7f4ec',
	ink900: '#0c0b08',
	ink700: '#2a2620',
	ink500: '#6b6457',
	ink300: '#b8b09f',
	accent: '#a47f3c',
};

const FONT_SERIF = "'Inria Serif', Georgia, 'Times New Roman', serif";
const FONT_MONO = "'IBM Plex Mono', Menlo, ui-monospace, monospace";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
	<rect width="1200" height="630" fill="${C.bg}"/>

	<!-- Top strip: brass arrow + italic serif masthead, mono location on right -->
	<text x="80" y="115" font-family="${FONT_MONO}" font-size="24" font-weight="500" fill="${C.ink900}">
		<tspan fill="${C.accent}" dx="0">→ </tspan><tspan font-family="${FONT_SERIF}" font-style="italic" font-weight="700" font-size="36">yosh.my</tspan>
	</text>
	<text x="1120" y="115" text-anchor="end" font-family="${FONT_MONO}" font-size="20" fill="${C.ink500}" letter-spacing="1.5">KAJANG · MY</text>

	<!-- Double-hairline editorial divider -->
	<line x1="80" y1="140" x2="1120" y2="140" stroke="${C.ink900}" stroke-width="1.5"/>
	<line x1="80" y1="146" x2="1120" y2="146" stroke="${C.ink900}" stroke-width="1.5"/>

	<!-- Section index -->
	<text x="80" y="215" font-family="${FONT_MONO}" font-size="20" font-weight="500" fill="${C.ink500}" letter-spacing="1.6">
		<tspan fill="${C.accent}">01</tspan> OVERVIEW
	</text>

	<!-- Big serif name -->
	<text x="80" y="320" font-family="${FONT_SERIF}" font-size="92" font-weight="700" fill="${C.ink900}" letter-spacing="-1.5">Noor Azree Hanifiah</text>

	<!-- Italic tagline (two lines) -->
	<text x="80" y="395" font-family="${FONT_SERIF}" font-size="32" font-style="italic" fill="${C.ink700}">Senior marketing &amp; corp comms operator.</text>
	<text x="80" y="438" font-family="${FONT_SERIF}" font-size="32" font-style="italic" fill="${C.ink700}">Federal-level advisory. Indie builder. AI trainer.</text>

	<!-- Spec strip black band with 4 stat callouts -->
	<rect x="80" y="500" width="1040" height="48" fill="${C.ink900}"/>
	<text x="100" y="531" font-family="${FONT_MONO}" font-size="18" font-weight="500" fill="${C.ink300}" letter-spacing="1.8"><tspan fill="${C.accent}">A</tspan> 15 YEARS</text>
	<text x="360" y="531" font-family="${FONT_MONO}" font-size="18" font-weight="500" fill="${C.ink300}" letter-spacing="1.8"><tspan fill="${C.accent}">B</tspan> 1,200+ TITLES</text>
	<text x="620" y="531" font-family="${FONT_MONO}" font-size="18" font-weight="500" fill="${C.ink300}" letter-spacing="1.8"><tspan fill="${C.accent}">C</tspan> 2,000+ REACH</text>
	<text x="880" y="531" font-family="${FONT_MONO}" font-size="18" font-weight="500" fill="${C.ink300}" letter-spacing="1.8"><tspan fill="${C.accent}">D</tspan> +45% UPLIFT</text>

	<!-- Bottom URL strip -->
	<text x="80" y="595" font-family="${FONT_MONO}" font-size="18" font-weight="500" fill="${C.ink500}" letter-spacing="1.6">YOSH.MY</text>
	<text x="1120" y="595" text-anchor="end" font-family="${FONT_MONO}" font-size="16" fill="${C.ink300}" letter-spacing="1.6">CV · PROJECTS · CONTACT</text>
</svg>
`;

const outPath = path.join(rootDir, 'public', 'og-default.png');

await sharp(Buffer.from(svg))
	.png({ quality: 92, compressionLevel: 9 })
	.toFile(outPath);

const stat = fs.statSync(outPath);
console.log(`✓ Wrote ${path.relative(rootDir, outPath)} (${(stat.size / 1024).toFixed(1)} KB)`);
