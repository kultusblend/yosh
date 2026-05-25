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
		tagline: 'Curated marketplace pembelajaran BM-first dengan payment lokal',
		status: 'LIVE',
		statusNote: 'invite-only, onboarding pencipta konten Malaysia',
		year: '2025',
		version: 'v1',
		stack: ['Cloudflare stack', 'Chip in Asia (payment)', 'Bunny Stream', 'WhatsApp OTP'],
		description:
			'Marketplace untuk webinar, course, dan ebook dari pakar Malaysia. Pembeli bayar guna FPX, kad kredit, atau e-wallet tempatan (TNG, Boost, GrabPay) tanpa gimik luar negara. Pencipta konten dapat subdomain peribadi (cthnya nama.univ.my), sales page builder, video host professional, dan komisen 15% telus dengan payout ke akaun bank Malaysia.',
		bullets: [
			'BM-first interface dan workflow, tak terpaksa adaptasi pasaran global',
			'Komisen 15% sahaja, payout terus ke akaun bank MY',
			'Curated invite-only: konten dipilih, bukan bazar terbuka',
			'Founder + first seller: dogfooding produk sendiri',
		],
		link: { label: 'Visit univ.my', href: 'https://univ.my/' },
	},
	{
		id: '02',
		name: 'osaji',
		tagline: 'AI calorie tracker yang faham makanan Malaysia',
		status: 'LIVE',
		statusNote: 'Telegram live, web dashboard in dev',
		year: '2025',
		version: 'beta',
		stack: ['Telegram Bot API', 'AI Vision', 'Local food DB (2,700+)'],
		description:
			'Penjejak kalori yang faham nasi lemak, bukan setakat dada ayam. Snap gambar makanan Malaysia, AI Vision identify lepas tu return kalori, protein, karbo, lemak automatik, ditapis melalui database makanan tempatan 2,700+ item.',
		bullets: [
			'Snap-and-log workflow: zero typing untuk entry biasa',
			'Vision-first: tak perlu cari item dalam database makanan global yang missing local food',
			'Local-first: database tuned khusus untuk masakan Malaysia',
		],
		link: { label: 'Visit osaji.app', href: 'https://osaji.app/' },
	},
];
