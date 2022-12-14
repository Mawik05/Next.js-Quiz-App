import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/quizLink.module.css";

export default function QuizPage({ QuizExport }) {
	const router = useRouter();
	const { quizLink } = router.query;
	let currentQuizNum = 0;

	let Quiz = {};

	QuizExport.map(function (item) {
		if (item.quizLink === quizLink) {
			Quiz = item;
		}
	});

	return (
		<div>
			<Head>
				<title>Quiz App</title>
			</Head>

			<Navbar quizName={Quiz.name}></Navbar>

			<div className={styles.container}>
				<p>Quiz Page {Quiz[1].question}</p>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	const url = "http://localhost:3000/api/quizes";
	const res = await fetch(url);
	const QuizExport = await res.json();
	return { props: { QuizExport } };
}
