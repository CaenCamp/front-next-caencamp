module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3111/'],
            numberOfRuns: 1,
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
            target: 'temporary-public-storage',
        },
    },
};
