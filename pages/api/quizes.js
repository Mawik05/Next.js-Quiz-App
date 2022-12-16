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
			quizLink: "periodictable",
			name: "Periodic Table Quiz",
			description:
				"How well do you know the periodic table? This test will test how well you remember certain things from the periodic table.",

			1: {
				question: "What is the atomic number for Helium?",
				correctOption: 2,
				option1: "1",
				option2: "2",
				option3: "3",
				option4: "4",
			},

			2: {
				question: "Which element has the symbol \"FE\"?",
				correctOption: 4,
				option1: "Nitrogen",
				option2: "Silicon",
				option3: "Copper",
				option4: "Iron",
			},

			3: {
				question: "What symbol has copper?",
				correctOption: 2,
				option1: "Co",
				option2: "Cu",
				option3: "Ce",
				option4: "Ko",
			},

			4: {
				question: "What element has symbol \"NA\"?",
				correctOption: 1,
				option1: "Sodium",
				option2: "Lithium",
				option3: "Zinc",
				option4: "Nothing",
			},

			5: {
				question: "What weight does Hydrogen have",
				correctOption: 3,
				option1: "0.1",
				option2: "0.8",
				option3: "1.008",
				option4: "2.4",
			},

			6: {
				question: "What atomic number is Oxygen",
				correctOption: 4,
				option1: "5",
				option2: "6",
				option3: "7",
				option4: "8",
			},

			7: {
				question: "What atomic number is Nitrogen",
				correctOption: 3,
				option1: "5",
				option2: "6",
				option3: "7",
				option4: "8",
			},

			8: {
				question: "What element has symbol \"C\"",
				correctOption: 2,
				option1: "Calcium",
				option2: "Carbon",
				option3: "Chlorine",
				option4: "Cobalt",
			},
		},

		{
			quizLink: "quizapp",
			name: "Quiz About Quiz App!",
			description:
				"This is a quiz about this Quiz App!",

			1: {
				question: "What is this app made in?",
				correctOption: 4,
				option1: "HTML, CSS and Javascript",
				option2: "Express",
				option3: "React",
				option4: "Next.js",
			},

			2: {
				question: "What does the README.md file for the project contain?",
				correctOption: 1,
				option1: "About the Quiz app and my plan for the project",
				option2: "Useless stuff",
				option3: "Information about Next.js",
				option4: "There is no README.md file",
			},

			3: {
				question: "How easy is it to add a new quiz?",
				correctOption: 4,
				option1: "Completely impossible",
				option2: "You have to code a new page for each quiz",
				option3: "You have to change an existing page",
				option4: "You have to add the new quiz to the quizes.js file",
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
		},
	]);
}
