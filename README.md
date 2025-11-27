📘 Placement Helper – IIITA DSA Hub

A company-wise placement preparation platform that curates important DSA questions for product-based companies and provides clean, well-formatted C++ solutions with direct practice links.

This project is designed to act as a structured roadmap for interview preparation and quick revision, especially for students targeting companies like Microsoft, Amazon, Oracle, and similar recruiters.

🔗 Live Repository

GitHub Repository:
👉 https://github.com/Guesskinghmm/placement-helper

Live Website (via GitHub Pages):
👉 https://guesskinghmm.github.io/placement-helper/

🎯 Objective

To provide a focused, distraction-free platform where students can:

Quickly view important DSA questions company-wise

Understand the problem through clear summaries

Study optimized C++ reference solutions

Directly practice on the original platform

🚀 Features

Company-wise DSA question segregation

Handpicked frequently asked interview problems

Rewritten problem summaries (no copy-paste from platforms)

Clear constraints for each problem

Properly formatted C++ solutions

Direct links to LeetCode / Codeforces for practice

AI Help button that opens ChatGPT with the question context

Clean and professional UI with resizable sidebar

Open for community contributions

🗂 Project Structure
placement-helper/
├── dashboard.html   → Main interface
├── main.css         → Styling and layout
├── app.js           → Question database & logic
└── README.md        → Project documentation

🛠 Tech Stack

HTML5

CSS3

Vanilla JavaScript

C++ (for solution references)

No frameworks or build tools used. The project runs directly in the browser.

▶️ How to Use

Open the live website.

Select a company from the left panel.

Click on any question to view:

Problem summary

Constraints

Practice link

C++ solution

Use:

Show Solution button to reveal code

Get AI Help to open ChatGPT with the question context

✏️ How to Add New Questions

All data is stored inside app.js.

To add a question, follow this structure:

{
  title: "Question Title",
  description: "Brief problem explanation in your own words.",
  constraints: [
    "Constraint 1",
    "Constraint 2"
  ],
  source: "https://leetcode.com/...",
  solution: `// C++ solution code here`
}


To add a new company:

NewCompany: [
  { question object },
  { question object }
]


Save the file and refresh the browser to see changes.

🤝 Contribution

This project is open for everyone.

You can contribute by:

Adding new companies

Adding more important DSA questions

Improving solution quality

Refining UI/UX

Enhancing explanations

Fork the repository and submit a pull request.

📌 Ideal For

Placement Preparation

DSA Practice

Resume Portfolio Project

Microsoft / Product Company Internship Applicants

📈 Future Improvements

Difficulty-based filtering

Search functionality

Mark as solved tracking

Topic-wise categorization

Progress analytics

⚖️ Disclaimer

All problem statements are rewritten for educational purposes.
Original problems are owned by their respective platforms such as LeetCode and Codeforces.
This project only provides references and links to those platforms for practice.

👨‍💻 Author

Aditya Tripathi
IIIT Allahabad
GitHub: https://github.com/Guesskinghmm