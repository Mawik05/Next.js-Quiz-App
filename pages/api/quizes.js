// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This is the API containing the quizes
export default function handler(req, res) {
	res.status(200).json([
		{
			quizLink: "mathquiz",
			name: "Math Quiz",
			description:
				"This math quiz will test how good you are at multiplication.",

			1: {
				question: "What is 5 * 5?",
				correctOption: 3,
				option1: "10",
				option2: "20",
				option3: "25",
				option4: "30",
			},

			2: {
				question: "What is 3 * 15?",
				correctOption: 2,
				option1: "30",
				option2: "45",
				option3: "50",
				option4: "75",
			},

			3: {
				question: "What is 2 * 3?",
				correctOption: 4,
				option1: "3",
				option2: "4",
				option3: "5",
				option4: "6",
			},

			4: {
				question: "What is 40 * 2.5?",
				correctOption: 2,
				option1: "80",
				option2: "100",
				option3: "120",
				option4: "140",
			},

			5: {
				question: "What is 4 * 4?",
				correctOption: 3,
				option1: "8",
				option2: "10",
				option3: "16",
				option4: "24",
			},
		},

		{
			quizLink: "capitalsquiz",
			name: "Capital Cities Quiz",
			description:
				"How many capital cities do you know? Test yourself at this quiz!",

			1: {
				question: "What is the capital of Norway?",
				correctOption: 1,
				option1: "Oslo",
				option2: "Stockholm",
				option3: "København",
				option4: "London",
			},

			2: {
				question: "What is the capital of England?",
				correctOption: 4,
				option1: "Oslo",
				option2: "Stockholm",
				option3: "København",
				option4: "London",
			},

			3: {
				question: "What is the capital of Denmark?",
				correctOption: 3,
				option1: "Oslo",
				option2: "Stockholm",
				option3: "København",
				option4: "London",
			},

			4: {
				question: "What is the capital of Sweden?",
				correctOption: 2,
				option1: "Oslo",
				option2: "Stockholm",
				option3: "København",
				option4: "London",
			},
		},

		{
			quizLink: "testquiz",
			name: "Test Quiz",
			description: "This is a test quiz used for testing.",

			1: {
				question: "Answer is option 1.",
				correctOption: 1,
				option1: "Option 1",
				option2: "Option 2",
				option3: "Option 3",
				option4: "Option 4",
			},

			2: {
				question: "Answer is option 2.",
				correctOption: 2,
				option1: "Option 1",
				option2: "Option 2",
				option3: "Option 3",
				option4: "Option 4",
			},

			3: {
				question: "Answer is option 3.",
				correctOption: 3,
				option1: "Option 1",
				option2: "Option 2",
				option3: "Option 3",
				option4: "Option 4",
			},

			4: {
				question: "Answer is option 4.",
				correctOption: 4,
				option1: "Option 1",
				option2: "Option 2",
				option3: "Option 3",
				option4: "Option 4",
			},

			5: {
				question: "Bonus Question: Answer is option 1.",
				correctOption: 1,
				option1: "Option 1",
				option2: "Option 2",
				option3: "Option 3",
				option4: "Option 4",
			},
		},
	]);
}
