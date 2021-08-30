export const OrganizationPage = ({ organization, styles }) => (
    <main className={styles.main}>
        <h1 className={styles.title}>{organization.name}</h1>

        <p className={styles.description}>Détails de l'organisation</p>
    </main>
);
