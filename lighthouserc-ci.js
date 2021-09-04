module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3111/'],
            numberOfRuns: 5,
            extends: 'lighthouse:no-pwa',
            settings: {
                preset: 'desktop',
                skipAudits: ['uses-http2'],
            },
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.91 }],
                'categories:best-practices': ['error', { minScore: 0.95 }],
                'categories:accessibility': ['error', { minScore: 0.91 }],
                'categories:seo': ['error', { minScore: 0.91 }],
            },
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'https://lighthouse.caen.camp',
            basicAuth: {
                username: process.env.LHCI_SERVER_USER,
                password: process.env.LHCI_SERVER_PASSWORD,
            },
        },
    },
};
