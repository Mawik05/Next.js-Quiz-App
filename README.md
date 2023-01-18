# Next.js Quiz-App

This is a Quiz-app I made in Next.js. I have not made very many web applications in Next.js yet, so this was very fun to make.

I tried to make the project easily expandable. I wanted to make it easy to add many different quizzes, without having to manually create a new web page for each and every quiz. I also made it so if a new quiz is added, the homepage with a list of all the quizzes is also automatically updated. This was a big challenge to solve.

In the project I use an API that provides the information I need for the quiz. I also made a dynamic page that you get taken to no matter what URL you go to, for example if you go to "quizApp/mathquiz" or "quizApp/geographyquiz" you will be taken to the same page. With both the API and the dynamic page, I can make it so that if you go to "quizApp/mathquiz" I get the questions from the "mathquiz" file, and if I go to another page, I get the quiz for that page.

All you need to do to add a new quiz is to add a new JSON object to the API file, then a new quiz is automatically created and added to the homepage.
