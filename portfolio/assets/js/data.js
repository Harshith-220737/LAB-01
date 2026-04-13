const experimentsData = [
  {
    "id": "lab-01",
    "title": "Introduction to HTML & Basic Tags",
    "category": "HTML",
    "tech": ["HTML5", "CSS3"],
    "date": "2026-01-15",
    "description": "Learning the fundamental structure of an HTML document, semantic tags, and basic styling.",
    "objective": "To understand the core building blocks of web development.",
    "theory": "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
    "procedure": [
      "Create an index.html file.",
      "Add doctype and basic head/body structure.",
      "Use headings, paragraphs, and lists.",
      "Apply internal CSS for basic styling."
    ],
    "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>Lab 01</title>\n</head>\n<body>\n  <h1>Welcome to Web Tech Lab</h1>\n  <p>This is my first experiment.</p>\n</body>\n</html>",
    "output_image": "assets/images/lab-01.png",
    "featured": true
  },
  {
    "id": "lab-02",
    "title": "Cyber-Aware UI Design",
    "category": "CSS",
    "tech": ["CSS3", "Glassmorphism", "Flexbox"],
    "date": "2026-02-02",
    "description": "Designing a modern, cyber-themed user interface with glassmorphism and neon accents.",
    "objective": "To master advanced CSS techniques for creating immersive UI experiences.",
    "theory": "Glassmorphism is a design trend that uses transparency, background blur, and subtle borders to create a 'frosted glass' effect. Neon accents provide a futuristic, tech-oriented aesthetic.",
    "procedure": [
      "Set up a dark background for the container.",
      "Apply backdrop-filter: blur() for the glass effect.",
      "Use linear gradients for neon borders.",
      "Implement smooth hover transitions."
    ],
    "code": ".glass-card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 15px;\n  padding: 2rem;\n  transition: all 0.3s ease;\n}\n\n.glass-card:hover {\n  border-color: #00f2fe;\n  box-shadow: 0 0 20px #00f2fe;\n}",
    "output_image": "assets/images/lab-02.png",
    "featured": true
  },
  {
    "id": "lab-03",
    "title": "Interactive JavaScript Components",
    "category": "JavaScript",
    "tech": ["JavaScript", "DOM Manipulation"],
    "date": "2026-03-10",
    "description": "Building interactive elements like sliders, accordions, and dynamic input handling using Vanilla JS.",
    "objective": "To understand event listeners and DOM manipulation in JavaScript.",
    "theory": "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
    "procedure": [
      "Select elements using document.querySelector.",
      "Attach event listeners (click, input).",
      "Update element content and styles dynamically.",
      "Implement simple validation logic."
    ],
    "code": "const button = document.querySelector('#action-btn');\nbutton.addEventListener('click', () => {\n  const display = document.querySelector('#display');\n  display.textContent = 'Button Clicked!';\n  display.style.color = '#00f2fe';\n});",
    "output_image": "assets/images/lab-03.png",
    "featured": false
  }
];
