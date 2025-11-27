# Placement Helper – IIITA DSA Hub

Placement Helper is a company-wise DSA interview preparation platform designed to help students prepare for product-based companies through structured and curated questions.

It provides rewritten problem summaries, clear constraints, and well-formatted C++ solutions along with direct links to the original problems for hands-on practice.

---

## Project Repository

GitHub Link  
https://github.com/Guesskinghmm/placement-helper

---

## Purpose

This project simplifies placement preparation by offering:
- A focused roadmap of important DSA questions  
- Company-specific problem categorization  
- Clean explanations and optimized C++ solutions  
- Direct access to practice platforms  

It is built for students targeting Microsoft, Amazon, Oracle, and other product-based companies.

---

## Key Features

- Company-wise segregation of DSA interview questions  
- Handpicked and placement-relevant problems  
- Rewritten problem descriptions (no direct copy-paste)  
- Clearly defined constraints  
- Properly formatted C++ reference solutions  
- Direct links to LeetCode / Codeforces  
- AI Help button for instant guidance  
- Clean UI with resizable sidebar  
- Open-source and contributor-friendly

---

## Project Structure

placement-helper  
├── dashboard.html   – Main interface  
├── main.css         – Styling and layout  
├── app.js           – Question logic and database  
└── README.md        – Project documentation  

---

## Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript  
- C++ (for solution references)

No external frameworks or libraries are used. The project runs directly in any modern browser.

---

## How to Use

1. Download or clone the repository.
2. Open `dashboard.html` in any web browser.
3. Select a company from the left panel.
4. Choose a question to view:
   - Problem summary  
   - Constraints  
   - Practice link  
   - C++ solution  
5. Use:
   - "Show Solution" to reveal code  
   - "Get AI Help" for guided assistance

---

## Adding New Questions

All questions are stored inside `app.js`.

To add a new question, follow this format:

{
  title: "Question Title",
  description: "Brief explanation in your own words.",
  constraints: [
    "Constraint 1",
    "Constraint 2"
  ],
  source: "https://leetcode.com/...",
  solution: `Well-formatted C++ solution`
}

To add a new company:

NewCompany: [
  { question object },
  { question object }
]

Save the file and refresh the page.

---

## Contribution

This project is open for contributions.

You can help by:
- Adding more companies  
- Including new important questions  
- Improving UI/UX  
- Enhancing explanations and solutions  

Fork the repository and submit a pull request.

---

## Ideal For

- Placement Preparation  
- DSA Revision  
- Internship Portfolios  
- Competitive Programming Practice  
- Open Source Contribution

---

## Future Enhancements

- Difficulty filters  
- Search functionality  
- Progress tracking  
- Tag-based categorization  
- Solved status system

---

## Disclaimer

Problem explanations are rewritten for educational purposes.  
Original problems remain the property of their respective platforms such as LeetCode and Codeforces.  
This project only provides references and direct links for legitimate practice.

---

## Author

Aditya Tripathi  
IIIT Allahabad  
GitHub: https://github.com/Guesskinghmm  

---

If you find this project useful, consider starring the repository.
