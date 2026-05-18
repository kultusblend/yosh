export interface ExperienceEntry {
	role: string;
	org: string;
	type?: string;
	period: string;
	location?: string;
	summary?: string;
	bullets: string[];
	keyAchievement?: string;
}

export const experience: ExperienceEntry[] = [
	{
		role: 'Book Publishing & Marketing Consultant',
		org: 'Penerbitan Kuras Buku',
		type: 'Own consultancy',
		period: '2019–Present',
		summary: 'Marketing & corporate communications work for publishers, authors, and government agencies.',
		bullets: [
			'Lead strategic planning, content development, and stakeholder engagement for publishing clients.',
			'Manage project-based teams of writers, designers, and event coordinators across campaigns and training programmes.',
			'Plan and run large-scale public engagement including online conventions, seminars, and product launches.',
		],
		keyAchievement: 'Organised Virtual Summit Sekolah Penulisan Ramadan, annual online writing convention 2020–2022, drawing 2,000+ participants nationwide.',
	},
	{
		role: 'Strategic Communications Consultant',
		org: 'WAZR Media Services',
		type: 'Project',
		period: '2024–2025',
		summary: 'Federal ministerial press secretary level advisory.',
		bullets: [
			'Strategic communications advisory at federal ministerial press secretary level, supporting media positioning and online reputation management.',
			'Drafted press releases, official statements, and media briefing materials for ministerial announcements and public events.',
			'Real-time social media monitoring across major platforms, tracking public sentiment and flagging reputational risks.',
			'Developed online crisis communication strategies during sensitive public issues, working alongside ministerial press teams.',
		],
		keyAchievement: 'Crisis communications advisory on the Kampung Sungai Baru redevelopment issue, including real-time sentiment monitoring and counsel on strategic public response.',
	},
	{
		role: 'Facebook Ads & Email Marketing Consultant',
		org: 'Funnel Evo Sdn Bhd (for Saleskip)',
		type: 'Project',
		period: '2021',
		bullets: [
			'Designed and ran multi-channel digital marketing campaigns combining paid social and email automation for Saleskip software platform.',
			'Managed campaign budget allocation, vendor relationships, A/B testing, and full-funnel ROI evaluation.',
		],
		keyAchievement: 'Reduced Cost-Per-Lead by 25% and lifted email-driven lead conversions by 40% through targeting and creative iteration.',
	},
	{
		role: 'Digital Marketing Strategist',
		org: 'Kebun Kita (Agritech Startup)',
		type: 'Project',
		period: '2020–2021',
		bullets: [
			'Built end-to-end digital marketing strategy connecting local farmers with urban consumers; supervised content production and channel execution.',
		],
		keyAchievement: 'Grew website traffic by 60% through integrated content, SEO, and paid media.',
	},
	{
		role: 'Digital Marketing & Publishing Trainer',
		org: 'FINE Academy Sdn Bhd',
		period: '2014–2019',
		bullets: [
			'Designed and delivered training programmes on SEO, SEM, social media management, content strategy, and email marketing for corporate, government, and education clients.',
			'Mentored trainee marketers and comms staff across multiple agencies, building internal capability and brand consistency.',
			'Consulted on digital book publishing, optimising titles for major online retail platforms.',
		],
		keyAchievement: 'Training modules improved client teams\' SEO and social media performance by an average of 45%.',
	},
	{
		role: 'Ebook Executive',
		org: 'PTS Media Group Sdn Bhd',
		period: '2011–2014',
		bullets: [
			'Managed portfolio of 1,200+ digital book titles for one of Malaysia\'s largest book publishers: content strategy, vendor relationships, platform partnerships.',
			'Drafted media statements, product announcements, and corporate communications materials.',
			'Negotiated and onboarded publishing distribution agreements that expanded the company\'s digital footprint.',
		],
	},
	{
		role: 'Media Executive',
		org: 'World Assembly of Muslim Youth (WAMY)',
		period: '2008–2011',
		bullets: [
			'Produced corporate event, portrait, and product photography for international NGO communications.',
			'Built and maintained the organisational website, and supported internal and external comms materials.',
		],
	},
];

export interface Workshop {
	topic: string;
	clients: { name: string; date: string }[];
}

export const workshops: Workshop[] = [
	{
		topic: 'Generative AI in Marketing',
		clients: [
			{ name: 'Institut Penyiaran dan Penerangan Tun Abdul Razak (IPPTAR)', date: 'May 2023' },
			{ name: 'Institut Koperasi Malaysia (INKOP)', date: 'August 2023' },
		],
	},
	{
		topic: 'Social Media Marketing',
		clients: [
			{ name: 'IPPTAR', date: 'October 2020' },
			{ name: 'Universiti Teknologi MARA (UiTM)', date: 'February 2021' },
		],
	},
	{
		topic: 'Writing & Publishing',
		clients: [
			{ name: 'Jabatan Perpaduan Negara dan Integrasi Nasional', date: '2013–2019' },
			{ name: 'Kementerian Kesihatan Malaysia', date: '2013–2019' },
		],
	},
	{
		topic: 'Professional Photography',
		clients: [
			{ name: 'Tentera Laut Diraja Malaysia (TLDM)', date: 'June 2013' },
			{ name: 'Jabatan Perpaduan Negara', date: 'June 2012' },
		],
	},
	{
		topic: 'Web Development',
		clients: [
			{ name: 'International Islamic University Malaysia (IIUM)', date: 'May 2011' },
			{ name: 'Universiti Selangor (UNiSEL)', date: 'March 2011' },
		],
	},
];

export interface Credential {
	title: string;
	org: string;
	period: string;
	note?: string;
}

export const education: Credential[] = [
	{
		title: 'Master in Publishing Studies',
		org: 'Universiti Malaya',
		period: '2024–Present',
		note: 'Ongoing',
	},
	{
		title: 'APEL A Certificate',
		org: 'MQA Malaysia',
		period: '2024',
		note: 'Accreditation of Prior Experiential Learning',
	},
	{
		title: 'Engineering Foundation',
		org: 'IIUM Matriculation Centre',
		period: '2007',
	},
	{
		title: 'Sijil Pelajaran Malaysia (SPM)',
		org: 'Kolej Islam Sultan Alam Shah',
		period: '2004',
	},
];

export const certifications: Credential[] = [
	{
		title: 'Google Digital Marketing & e-Commerce Professional Certificate',
		org: 'Google',
		period: 'Issued',
		note: 'Digital marketing foundations, e-commerce store management, customer loyalty, marketing analytics, customer engagement, email marketing.',
	},
];

export const speaking = [
	{
		title: 'The Business of Digital Content for Kids',
		venue: 'Asian Festival of Children\'s Content',
		location: 'Singapore',
		year: '2013',
		role: 'Speaker',
	},
];

export const publications = [
	{
		title: 'Mudahnya Bisnes dengan Forum Online',
		publisher: 'PTS Profesional Sdn Bhd',
		year: '2011',
		role: 'Author',
	},
];

export const competencies = [
	'Corporate Communications & Media Relations',
	'Crisis Communications & Reputation Management',
	'Strategic Marketing & Digital Campaigns',
	'Public Engagement & Event Management',
	'Campaign Budget & ROI Management',
	'Training & Professional Development',
];

export const proficiencies = {
	productivity: ['Microsoft Office', 'Canva'],
	design: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign'],
	digital: [
		'WordPress',
		'HTML',
		'CSS',
		'Meta Ads Manager',
		'Google Analytics',
		'Social media monitoring tools',
		'Email automation platforms',
	],
};

export const languages = [
	{ name: 'Bahasa Melayu', spoken: 10, written: 10 },
	{ name: 'English', spoken: 7, written: 8 },
];
