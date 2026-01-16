import styles from './WorkCard.module.css';

type Props = {
    number: string,
    title: string,
    descrption: string
}

export default function WorkCard(props: Props) {
    return (
        <div className={styles.workCard}>
            <p className={styles.number}>{props.number}</p>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.description}>{props.descrption}</p>
        </div>
    )
}