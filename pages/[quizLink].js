import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuizComplete from "../components/QuizComplete";
import styles from "../styles/quizLink.module.css";

export default function QuizPage({ QuizExport }) {
	const router = useRouter();
	const { quizLink } = router.query;
	const [currentQuestionNum, setCurrentQuestionNum] = useState(1);
	const [score, setScore] = useState(0);
	const [submit, setSubmit] = useState(false);
	const [option1, setOption1] = useState("");
	const [option2, setOption2] = useState("");
	const [option3, setOption3] = useState("");
	const [option4, setOption4] = useState("");

	let Quiz = {};

	// Map the quiz from the API call to the Quiz object
	QuizExport.map(function (item) {
		if (item.quizLink === quizLink) {
			Quiz = item;
		}
	});

	// Redirect user if a quiz at the URL is not found
	useEffect(() => {
		if (Object.keys(Quiz).length === 0) {
			router.push("/");
		}
	}, [Quiz]);

	if (Object.keys(Quiz).length === 0) {
		return <div></div>;
	}

	// Javascript functionallity
	function answer(answerNum) {
		for (let i = 1; i <= 4; i++) {
			if (i === Quiz[currentQuestionNum].correctOption) {
				setOption1(styles.correctAnswer);
			}
		}
		setSubmit(true);
	}

	function nextQuestion() {
		setCurrentQuestionNum(currentQuestionNum + 1);
		setSubmit(false);
	}

	// If there are no more questions, display the finished page
	if (Quiz.hasOwnProperty(currentQuestionNum) === false) {
		console.log("No more question");
		return <QuizComplete score={score} maxScore={currentQuestionNum - 1} />;
	}

	// Quiz page
	return (
		<div>
			<Head>
				<title>Quiz App</title>
			</Head>

			<Navbar quizName={Quiz.name}></Navbar>

			<div className={styles.container}>
				<h1>{Quiz[currentQuestionNum].question}</h1>
				<div>
					<button
						id="1"
						className={[styles.btn, option1].join(" ")}
						onClick={() => answer(1)}
					>
						{Quiz[currentQuestionNum].option1}
					</button>
					<button
						id="2"
						className={[styles.btn, option2].join(" ")}
						onClick={() => answer(2)}
					>
						{Quiz[currentQuestionNum].option2}
					</button>
				</div>

				<div>
					<button
						id="3"
						className={[styles.btn, option3].join(" ")}
						onClick={() => answer(3)}
					>
						{Quiz[currentQuestionNum].option3}
					</button>
					<button
						id="4"
						className={[styles.btn, option4].join(" ")}
						onClick={() => answer(4)}
					>
						{Quiz[currentQuestionNum].option4}
					</button>
				</div>

				<div>
					{submit ? (
						<button
							className={styles.nextBtn}
							onClick={nextQuestion}
						>
							Continue
						</button>
					) : null}
				</div>
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
