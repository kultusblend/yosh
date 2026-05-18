import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE ?? 'https://yosh.my';
const isProd = SITE_URL.includes('yosh.my');

const prod = `# Production robots
User-agent: *
Allow: /

# AI search engines welcome
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

const staging = `# Staging / preview robots
User-agent: *
Disallow: /
`;

export const GET: APIRoute = () =>
	new Response(isProd ? prod : staging, {
		headers: { 'Content-Type': 'text/plain' },
	});
