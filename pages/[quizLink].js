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
	const [correctAnswer, setCorrectAnswer] = useState(0);
	const [wrongAnswer, setWrongAnswer] = useState(0);

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
			// Set the style to the correct answer box to be green
			if (i === Quiz[currentQuestionNum].correctOption) {
				setCorrectAnswer(i);

				// If user answered correct, increase score
				if (i === answerNum) {
					setScore(score + 1);
				}

			} else if (i === answerNum) {
				// If user answered wrong, set the style to the answer box to be red
				setWrongAnswer(i);
			}
		}

		// Show the continue button and disable buttons
		setSubmit(true);
	}

	function nextQuestion() {
		setCorrectAnswer(0);
		setWrongAnswer(0);
		setCurrentQuestionNum(currentQuestionNum + 1);
		setSubmit(false);
	}

	// If there are no more questions, display the finished page
	if (Quiz.hasOwnProperty(currentQuestionNum) === false) {
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
						className={(styles.btn) + " " + 
						(correctAnswer === 1 ? styles.correctAnswer : null) + " " + 
						(wrongAnswer === 1 ? styles.wrongAnswer : null)}
						onClick={() => answer(1)}
						disabled={submit ? true : false}
					>
						{Quiz[currentQuestionNum].option1}
					</button>
					<button
						className={(styles.btn) + " " + 
						(correctAnswer === 2 ? styles.correctAnswer : null) + " " + 
						(wrongAnswer === 2 ? styles.wrongAnswer : null)}
						onClick={() => answer(2)}
						disabled={submit ? true : false}
					>
						{Quiz[currentQuestionNum].option2}
					</button>
				</div>

				<div>
					<button
						className={(styles.btn) + " " + 
						(correctAnswer === 3 ? styles.correctAnswer : null) + " " + 
						(wrongAnswer === 3 ? styles.wrongAnswer : null)}
						onClick={() => answer(3) }
						disabled={submit ? true : false}
					>
						{Quiz[currentQuestionNum].option3}
					</button>
					<button
						className={(styles.btn) + " " + 
						(correctAnswer === 4 ? styles.correctAnswer : null) + " " + 
						(wrongAnswer === 4 ? styles.wrongAnswer : null)}
						onClick={() => answer(4)}
						disabled={submit ? true : false}
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
