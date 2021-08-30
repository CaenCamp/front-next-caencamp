export const JobPage = ({ job, styles }) => (
    <main className={styles.main}>
        <h1 className={styles.title}>{job.title}</h1>

        <p className={styles.description}>Détails du poste</p>
    </main>
);
