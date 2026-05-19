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
