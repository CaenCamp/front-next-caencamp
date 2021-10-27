const terminalLog = violations => {
    cy.task(
        'log',
        `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
            violations.length === 1 ? 'was' : 'were'
        } detected`,
    );
    // pluck specific keys to keep the table readable
    const violationData = violations.map(({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
    }));

    cy.task('table', violationData);
};

const testA11y = () => {
    cy.injectAxe();
    for (const size of [[1920, 1080], 'macbook-13', 'iphone-6', 'ipad-2', 'ipad-mini', 'samsung-s10']) {
        if (Cypress._.isArray(size)) {
            cy.viewport(size[0], size[1]);
        } else {
            cy.viewport(size);
        }
        cy.checkA11y(
            {},
            {
                rules: {
                    'heading-order': { enabled: false },
                    'duplicate-id': { enabled: false },
                },
            },
            terminalLog,
        );
    }
};

const pages = [
    `/`,
    '/evenements',
    '/evenements/a-la-decouverte-des-tests-automatiques',
    '/speakers',
    '/speakers/guillaume-darbonne',
    '/jobs',
    '/annuaire',
    '/sponsors',
    '/association',
    '/contact',
    '/call-for-speaker',
];

describe('Site accessibility', () => {
    it('should be accessible', () => {
        for (const page of pages) {
            cy.visit(page);
            testA11y();
        }
    });
});
