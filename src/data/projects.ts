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
		tagline: 'Telegram-based calorie & macro tracker bot',
		status: 'LIVE',
		statusNote: 'ongoing development',
		year: '2025',
		version: 'v0.x',
		stack: ['Telegram Bot API', 'Gemini Vision', 'TypeScript'],
		description:
			'Personal-use bot untuk track kalori dan macros melalui Telegram. Snap gambar makanan, bot reply estimate. Vision model handle classification + portion estimate, bot tu jaga conversation state dan daily log.',
		bullets: [
			'Snap-and-log workflow: zero typing untuk entry biasa',
			'Vision-first: tak perlu cari benda dalam database makanan',
			'Designed for solo user, no auth / multi-tenant overhead',
		],
		// TODO: confirm bot handle + add live link
		link: { label: 'Try @osaji_bot', href: '#' },
	},
];
