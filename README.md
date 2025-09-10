# 📝 Product Requirements Document (PRD): Word Counter Web App

**Version:** 1.0  
**Date:** 🗓️ September 10, 2025  
**Author:** 👤 Arnab  
**Status:** 🟢 Draft

---

### 1. Introduction & Vision 🚀

This document outlines the requirements for a simple, fast, and efficient single-page web application: the **Word
Counter**. The vision is to provide a clean, accessible, and user-friendly online tool for anyone needing to quickly
count the number of words and characters in a piece of text. The application will be built using the **React.js**
library to ensure a responsive and dynamic user experience.

---

### 2. Problem Statement 🤔

Writers, students, social media managers, and professionals frequently need to adhere to specific word or character
limits for their work (e.g., essays, tweets, reports). Manually counting words is impractical, and opening a
full-fledged word processor just for a quick count is cumbersome. Users need a "no-friction" tool that is instantly
available on the web to paste or type text and get immediate, accurate counts.

---

### 3. Target Audience 🎯

* **Students & Academics:** Checking word counts for essays, assignments, and papers.
* **Content Creators & Bloggers:** Ensuring articles meet length requirements for readability and SEO.
* **Social Media Managers:** Crafting posts that fit within character limits for platforms like Twitter/X.
* **Professionals:** Writing concise emails, reports, or summaries with specific length constraints.

---

### 4. Core Features & Functionality (MVP) ✅

The Minimum Viable Product (MVP) will focus on providing the core counting functionality with a high-quality user
experience.

#### **4.1. Text Input Area ⌨️**

* A large, prominent, and resizable text area (`<textarea>`) will be the main element on the page.
* It should have a clear placeholder text, such as "Start typing or paste your text here..."
* The area should be focused automatically when the page loads, allowing the user to start typing immediately.

#### **4.2. Real-time Data Counters 🔢**

* The application must display key metrics that update in **real-time** as the user types, deletes, or pastes text.
* **Word Count:** Displays the total number of words.
* **Character Count:** Displays the total number of characters, including spaces.
* **Character Count (No Spaces):** Displays the total number of characters, excluding spaces.

#### **4.3. Control Buttons 🔘**

* **Copy Text:** A button that allows the user to copy the entire content of the text area to their clipboard with a
  single click. A visual confirmation (e.g., "Copied!") should appear briefly.
* **Clear Text:** A button to instantly delete all content from the text area, resetting the counters to zero.

---

### 5. User Stories ✍️

* **As a student,** I want to see the word count update instantly as I type, so I can track my progress toward my
  essay's word limit without interruption.
* **As a social media manager,** I want to see a real-time character count, so I can ensure my posts do not exceed the
  platform's limits.
* **As a user,** I want a "Clear" button, so I can easily start a new count without manually selecting and deleting all
  the text.
* **As a writer,** I want a "Copy" button, so I can quickly move my finalized text to another application after checking
  its length.

---

### 6. Design & UX Requirements 🎨

* **Layout:** A clean, minimalist, and centered single-page layout.
* **Responsiveness:** The application must be fully responsive and provide an excellent experience on **desktop 🖥️,
  tablet 📱, and mobile 🤳**.
* **Visual Style:** Use a modern and clean design with high-contrast text for readability.
* **Feedback:** Provide clear visual feedback for actions like clicking the "Copy" button.

---

### 7. Technical Requirements (Non-Functional) ⚙️

* **Technology Stack:** The application will be built using **React.js**. No backend or database is required for the
  MVP.
* **Performance:** The application must load quickly and provide a lag-free typing experience.
* **Browser Compatibility:** Must be fully functional on the latest versions of major web browsers (Chrome, Firefox,
  Safari, Edge).
* **Accessibility (a11y):** The application should adhere to basic accessibility standards (WCAG).

---

### 8. Future Scope (Post-MVP) 🔭

The following features are considered out of scope for the initial release but may be implemented in future versions:

* Paragraph and sentence counters.
* Estimated reading time and speaking time.
* Keyword density analysis.
* Dark/Light mode toggle 🌓.
* Saving notes locally in the browser using `localStorage`.

🗺️ Sitemap
Since this is a Single-Page Application (SPA), the sitemap is very straightforward. The entire user experience exists on
a single route.

/ (Home Route): This is the main and only page of the application. It will render the App component, which contains the
entire word counter interface.

🧱 Component Architecture & List
Here is a breakdown of the components that will make up the Word Counter application. This structure promotes
reusability and separation of concerns.

Component Hierarchy
A visual representation of how the components will be nested:

App
└── WordCounter
├── Header
├── TextArea
├── StatsBar
│ ├── StatCard (for Words)
│ ├── StatCard (for Characters)
│ └── StatCard (for Characters w/o spaces)
└── ActionBar
├── Button (for Copy)
└── Button (for Clear)
Detailed Component List
App.js

Responsibility: The root component of the application. Its main job is to render the primary layout and the main
WordCounter component.

State/Props: None. It's a simple structural container.

WordCounter.js (Container Component)

Responsibility: This is the "brain" of the application. It will manage the application's state and contain all the core
logic for counting words and characters.

State:

text (string): Stores the current text from the text area.

Logic:

Calculates word count, character count, etc., based on the text state.

Handles the onChange event from the TextArea.

Contains the functions for the "Copy" and "Clear" button actions.

Header.js

Responsibility: A simple presentational component to display the application's title and a brief description.

Props:

title (string): The main title to display (e.g., "Word Counter").

subtitle (string): A short tagline or description.

TextArea.js

Responsibility: Renders the main <textarea> input field. This will be a controlled component.

Props:

text (string): The value to display in the text area (from the WordCounter state).

onTextChange (function): The handler function to call when the text changes.

StatsBar.js

Responsibility: A container component that displays the different calculated statistics. It arranges the StatCard
components in a clean layout.

Props:

wordCount (number)

charCount (number)

charCountNoSpaces (number)

StatCard.js (Reusable UI Component)

Responsibility: Displays a single statistic with a label and its value. This component will be reused for each metric.

Props:

label (string): The name of the statistic (e.g., "Words").

value (number): The calculated value to display.

ActionBar.js

Responsibility: A container for the main action buttons ("Copy Text", "Clear Text").

Props:

onCopy (function): The handler for the copy action.

onClear (function): The handler for the clear action.

isTextEmpty (boolean): To disable the buttons when there is no text.

Button.js (Reusable UI Component)

Responsibility: Renders a styled, reusable button element.

Props:

onClick (function): The function to execute when clicked.

label (string): The text to display on the button.

icon (optional, JSX): An icon to display next to the label.

disabled (boolean): To enable/disable the button.

App Component

main (HTML main element)

WordCounter Component

div (container for the entire tool)

Header Component

header (HTML header element)

h1 (for the title prop, e.g., "Word Counter")

p (for the subtitle prop)

TextArea Component

div (wrapper for the text area)

textarea (HTML textarea element)

StatsBar Component

div (container for all stats)

StatCard Component (Instance 1: Words)

div (card container)

span (for the value prop, e.g., the word count number)

span (for the label prop, e.g., "Words")

StatCard Component (Instance 2: Characters)

div (card container)

span (for the value prop)

span (for the label prop, e.g., "Characters")

StatCard Component (Instance 3: Characters w/o spaces)

div (card container)

span (for the value prop)

span (for the label prop, e.g., "Characters (No Spaces)")

ActionBar Component

div (container for buttons)

Button Component (Instance 1: Copy)

button (HTML button element)

<i> or <span> (optional icon prop)

Text Node (the label prop, e.g., "Copy Text")

Button Component (Instance 2: Clear)

button (HTML button element)

<i> or <span> (optional icon prop)

Text Node (the label prop, e.g., "Clear")