import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar(props) {
	return (
		<nav className={styles.nav}>
			<li>
				<Link
					className={[styles.el, styles.textLeft].join(" ")}
					href="/"
				>
					Home
				</Link>
			</li>

			<li className={[styles.el, styles.textRight].join(" ")}>
				<p>{props.quizName}</p>
			</li>
		</nav>
	);
}
