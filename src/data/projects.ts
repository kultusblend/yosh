export type ProjectStatus = 'LIVE' | 'IN DEV' | 'SHIPPED' | 'STATIC' | 'ARCHIVED';

export interface Project {
	id: string;
	name: string;
	tagline: string;
	status: ProjectStatus;
	statusNote?: string;
	year: string;
	version?: string;
	stack?: string[];
	description: string;
	bullets?: string[];
	link?: { label: string; href: string };
	repo?: string;
}

export const projects: Project[] = [
	{
		id: '01',
		name: 'univ.my',
		tagline: 'Marketplace kursus, webinar, dan ebook BM-first',
		status: 'LIVE',
		statusNote: 'invite-only, onboarding pencipta',
		year: '2025',
		version: 'v1',
		stack: ['Cloudflare', 'Chip in Asia', 'Bunny Stream', 'WhatsApp OTP'],
		description:
			'Pencipta Malaysia jual kepada audience Malaysia. Pembeli bayar guna FPX, kad kredit, atau e-wallet tempatan. Komisen 15%, payout ke akaun bank MY.',
		bullets: [
			'Curated invite-only, bukan bazar terbuka',
			'Subdomain peribadi untuk setiap pencipta (cth: nama.univ.my)',
			'BM-first, bukan adaptasi pasaran global',
		],
		link: { label: 'Visit univ.my', href: 'https://univ.my/' },
	},
	{
		id: '02',
		name: 'tempa.my',
		tagline: 'Laman web static untuk SME Malaysia, dari RM20/bulan',
		status: 'LIVE',
		statusNote: 'subscriptions open',
		year: '2025',
		version: 'v1',
		stack: ['Cloudflare Pages', 'Static SSG', 'No-code editor', 'Chip in Asia'],
		description:
			'Kami migrate laman WordPress atau Wix awak ke static site di Cloudflare. Klien edit kandungan sendiri tanpa coding.',
		bullets: [
			'WordPress migration included',
			'Editor visual no-code, klien edit sendiri',
			'Cloudflare global edge, HTTPS auto, no plugin maintenance',
		],
		link: { label: 'Visit tempa.my', href: 'https://tempa.my/' },
	},
	{
		id: '03',
		name: 'osaji',
		tagline: 'AI calorie tracker yang faham makanan Malaysia',
		status: 'LIVE',
		statusNote: 'Telegram live, web dashboard in dev',
		year: '2025',
		version: 'beta',
		stack: ['Telegram Bot API', 'AI Vision', 'Local food DB (2,700+)'],
		description:
			'Snap gambar makanan kat Telegram, bot return kalori dan macros. Database 2,700+ makanan tempatan, faham nasi lemak bukan setakat dada ayam.',
		bullets: [
			'Snap-and-log: zero typing untuk entry',
			'Database makanan Malaysia, bukan generic global DB',
			'Web dashboard sedang dibangunkan',
		],
		link: { label: 'Visit osaji.app', href: 'https://osaji.app/' },
	},
];
