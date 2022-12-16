import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function QuizComplete(props) {
	return (
		<div className={styles.centerComplete}>
			<h1>You completed the quiz!</h1>

			<h3 className={styles.bottomMargin}>
				You completed {props.score} / {props.maxScore} questions on the
				quiz
			</h3>

			<Link className={styles.homeLink} href={"/"}>
				Go back to home
			</Link>
		</div>
	);
}
