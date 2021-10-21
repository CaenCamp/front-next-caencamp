import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import events from './fixtures.json';
import { computeTalkDateTime, TalkDateTime } from './Page';

expect.extend(toHaveNoViolations);

describe('Event Page', () => {
    describe('fonction computeTalkDateTime', () => {
        it("devrait retourner l'heure de l'événement pour le premier talk", () => {
            const event = events[1];
            const startDate = computeTalkDateTime({
                event,
                talk: event.workPerformed[0],
            });

            expect(startDate.toLocaleString('fr-FR')).toEqual('27/11/2018, 17:30:00');
        });

        it("devrait retourner l'heure de l'événement plus la durée du talk précédent plus 10 minutes pour le second", () => {
            const event = events[1];
            const startDate = computeTalkDateTime({
                event,
                talk: event.workPerformed[1],
            });

            expect(startDate.toLocaleString('fr-FR')).toEqual('27/11/2018, 18:25:00');
        });
    });

    describe('Composant TalkDateTime', () => {
        it("devrait afficher la date d'un événement en français", () => {
            const event = events[1];
            render(<TalkDateTime event={event} talk={event.workPerformed[0]} />);

            const date = screen.getByText('mardi 27 novembre 2018, 17:30');

            expect(date).toBeInTheDocument();
        });

        it('devrait afficher la date dans une balise date valide', () => {
            const event = events[1];
            render(<TalkDateTime event={event} talk={event.workPerformed[0]} />);

            const date = screen.getByText('mardi 27 novembre 2018, 17:30');

            expect(date.getAttribute('dateTime')).toEqual('2018-11-27T17:30:00.000Z');
        });

        it('devrait avoir une accessibilité valide', async () => {
            const event = events[1];
            const { container } = render(
                <dl>
                    <dt>Date et heure : </dt>
                    <TalkDateTime event={event} talk={event.workPerformed[0]} />
                </dl>,
            );
            const results = await axe(container);

            expect(results).toHaveNoViolations();
        });
    });
});
