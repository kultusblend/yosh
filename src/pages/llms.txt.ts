import type { APIRoute } from 'astro';

const SITE_URL = import.meta.env.SITE ?? 'https://yosh.my';

const body = `# yosh.my

> Personal site of Azree Hanifiah. Senior marketing & corporate communications consultant. 15+ years across publishing, media, federal advisory, and education in Malaysia. Trainer on generative AI in marketing.

## Pages

- [About](${SITE_URL}/about/): Story, current focus, languages, core competencies.
- [CV](${SITE_URL}/cv/): Full work history, training delivered, education, certifications, publications, speaking.
- [Projects](${SITE_URL}/projects/): Side projects and indie tools. Currently shipping osaji, a Telegram calorie tracker bot.
- [Contact](${SITE_URL}/contact/): Email, phone, brief intake form.

## Optional

- Author: Azree Hanifiah
- Based in: Kajang, Selangor, Malaysia
- Languages: Bahasa Melayu (10/10), English (8/10)
`;

export const GET: APIRoute = () =>
	new Response(body, {
		headers: { 'Content-Type': 'text/plain' },
	});
