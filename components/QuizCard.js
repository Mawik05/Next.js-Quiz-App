import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function QuizCard(props) {
	return (
		<div className={styles.quizBox}>
			<h2>{props.name}</h2>

			<p>{props.description}</p>

			<p className={styles.textBold}>Number of questions: {props.questionCount}</p>

			<Link className={styles.quizLink} href={props.link}>
				Go to Quiz!
			</Link>
		</div>
	);
}
