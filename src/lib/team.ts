import { PlaceHolderImages } from '@/lib/placeholder-images';

export const teamMembers = [
    {
        name: 'Chip Joyner',
        title: 'Managing Partner',
        id: 'team-member-4',
        bio: 'Chip is an accomplished restaurant and QSR executive with 15+ years of leadership in multi-unit operations and growth strategy. He leads the firm’s mission to acquire and elevate great hospitality brands through technology and operational excellence. A graduate of Harvard Business School\'s OPM program, Chip previously gained deep operational DNA with brands like Chick-fil-A and Starbucks, scaling portfolios exceeding $60 million in annual revenue.',
    },
    {
        name: 'Joseph H. Handy',
        title: 'Managing Director / Partner, Development & Fundraising',
        id: 'team-member-5',
        bio: 'Joe is an accomplished executive with over two decades of experience driving growth and fundraising across high-profile organizations. As Chief Development Officer, he leads strategic development, brand expansion, and partner relations, guiding the company’s growth through innovation and a deep commitment to community impact.',
    },
    {
        name: 'Derrick Johnson',
        title: 'Chief Technology & Operations Director',
        id: 'team-member-6',
        bio: 'Derrick drives the integration of advanced technology and scalable systems across RTG’s portfolio. With 15+ years in franchise operations for brands like Cinnaholic and Levy Restaurants, he specializes in operational optimization and leveraging data to enhance efficiency and customer experience. He is a graduate of The University of Tennessee at Chattanooga.',
    },
    {
        name: 'Michael Auzenne',
        title: 'Senior Advisor, Governance & Strategy',
        id: 'team-member-7',
        bio: "Mike brings a powerful combination of analytical rigor, investment expertise, and brand experience to RTG Investments. With 15+ years across investment banking and global restaurant leadership, he guides RTG’s approach to identifying and elevating high-potential hospitality brands. He holds an MBA from Harvard Business School.",
    },
    {
        name: 'Rajiv Asnani',
        title: 'Principal',
        id: 'team-member-8',
        bio: 'Rajiv has an extensive background in private equity and hospitality investment, bringing a sharp financial eye to the team.',
    },
    {
        name: 'Rebecca Auzenne',
        title: 'Senior Software Engineer',
        id: 'team-member-9',
        bio: 'Rebecca is a lead developer from the tech startup world, specializing in building robust, consumer-facing platforms.',
    },
    {
        name: 'Brock Bacon',
        title: 'Vice President',
        id: 'team-member-10',
        bio: 'Brock handles mergers & acquisitions, coming from a leading food & beverage focused investment bank.',
    },
    {
        name: 'Ben Baranov',
        title: 'Senior Data Associate',
        id: 'team-member-11',
        bio: 'Ben is our data science lead, previously working at a major QSR analytics firm to drive data-informed decisions.',
    },
    {
        name: 'Reed Bethune',
        title: 'Data Associate',
        id: 'team-member-12',
        bio: 'Reed focuses on analytics and business intelligence, with a background at a national restaurant chain.',
    },
    {
        name: 'Caitlin Cain',
        title: 'Executive Assistant',
        id: 'team-member-13',
        bio: 'Caitlin provides executive support for our C-suite leaders, bringing experience from the hospitality industry.',
    },
    {
        name: 'Connor Camunez',
        title: 'Analyst',
        id: 'team-member-14',
        bio: 'Connor is responsible for financial modeling and due diligence, hailing from a boutique investment firm.',
    },
    {
        name: 'Lindsay Carlson',
        title: 'Director - Investor Relations',
        id: 'team-member-15',
        bio: 'Lindsay manages investor communications, having previously worked for a publicly traded hospitality REIT.',
    },
];

export const leadershipTeam = teamMembers.slice(0, 4);

export function getTeamMemberImage(memberId: string) {
    return PlaceHolderImages.find((img) => img.id === memberId);
}
