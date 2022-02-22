/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://caen.camp/',
    generateRobotsTxt: true,
    exclude: ['/annuaire', '/annuaire/*', '/association', '/jobs', '/jobs/*', '/sponsors'],
    changefreq: 'weekly',
};
