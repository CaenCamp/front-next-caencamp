/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://beta.caen.camp/',
    generateRobotsTxt: true,
    exclude: [
        '/annuaire',
        '/annuaire/*',
        '/association',
        '/call-for-speaker',
        '/contact',
        '/jobs',
        '/jobs/*',
        '/sponsors',
    ],
    changefreq: 'weekly',
};
