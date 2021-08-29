export const EventPage = ({ event, styles }) => (
    <main className={styles.main}>
        <h1 className={styles.title}>{event.name}</h1>

        <p className={styles.description}>Détails de l'événement</p>
    </main>
);
