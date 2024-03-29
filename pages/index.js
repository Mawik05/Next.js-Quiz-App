import Head from "next/head";
import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";
import styles from "../styles/Home.module.css";

export default function Home({ QuizExport }) {
	return (
		<div>
			<Head>
				<title>Quiz App</title>
			</Head>

			<Navbar></Navbar>

			<main className={styles.container}>
				<h1 className={styles.centerComplete}>Select a quiz to get started</h1>

				<div>
					{QuizExport.map(function (item) {
						return (
							<QuizCard
								key={item.quizLink}
								name={item.name}
								description={item.description}
								link={item.quizLink}
								questionCount={Object.keys(item).length - 3}
							></QuizCard>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/quizes");
	const QuizExport = await res.json();
	return { props: { QuizExport } };
}
