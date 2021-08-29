export const SpeakerPage = ({ speaker, styles }) => (
    <main className={styles.main}>
        <h1 className={styles.title}>{speaker.name}</h1>

        <p className={styles.description}>Détails du speaker</p>
    </main>
);
