import styles from '../styles/Home.module.css';

const Resume = () => (
    <div className={styles.resume}>
        <p>
            Le CaenCamp est un collectif ouvert à <strong>tous.tes les développeur.euses</strong> du Calvados, que ces
            personnes soient juniors, séniores, professionnelles, étudiantes ou juste curieuses.
        </p>
        <p>
            Une rencontre, gratuite, est organisée <strong>chaque dernier jeudi du mois</strong> autour de sujets
            présentés par des membres du collectif souhaitant partager leur expérience. Ces sujets peuvent concerner
            n'importe quel langage de programmation, voir d'autres sujets que la programmation, du moment qu'ils
            concernent le monde du développement informatique.
        </p>
        <p>
            Sans forme de structure d'organisation formelle, le CaenCamp existent depuis <strong>2012</strong>.
        </p>
    </div>
);

export default Resume;
