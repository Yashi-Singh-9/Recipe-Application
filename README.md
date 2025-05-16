# 🥘 Recipe Application

Welcome to **Nuxtcipes**, a dynamic recipe web application built with HTML, CSS, and JavaScript. This project fetches real-time recipe data using a third-party API and presents it with an interactive and responsive user interface.

It includes features like individual recipe pages, dynamic checklists, and a clean layout adaptable to different screen sizes. Stylus is used as the CSS preprocessor for enhanced styling capabilities.

---

## 📋 Table of Contents

* [Overview](#overview)

  * [The Challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My Process](#my-process)

  * [Built With](#built-with)
  * [What I Learned](#what-i-learned)
  * [Continued Development](#continued-development)
  * [Useful Resources](#useful-resources)
* [Installation & Usage](#installation--usage)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

---

## ✅ Overview

### The Challenge

Users should be able to:

* Browse a list of recipes using data from a third-party API
* View detailed pages for each recipe
* Check off ingredients in a toggle-able checklist
* View responsive layouts across mobile, tablet, and desktop
* Experience hover and focus states on interactive elements

### Screenshot

**Desktop Design**

![Desktop Design](designs/desktop-design.png)

**Mobile Design**

<img src="designs/mobile-design.png" height="750px" width="auto"> 

### Links

🌍 **Live Site URL**: [Live Demo](https://yashi-singh-9.github.io/Recipe-Application/)

---

## 🛠 My Process

### 🧱 Built With

* Semantic **HTML5**
* **Stylus** for CSS preprocessing
* **JavaScript (ES6+)**
* **Fetch API** for external data
* Responsive design using **Flexbox** & **Grid**
* Mobile-first approach

### 🧠 What I Learned

* How to dynamically load data from the [DummyJSON Recipe API](https://dummyjson.com/docs/recipes)
* Handling URL parameters for individual recipe pages
* Managing relative paths for assets and scripts across nested directories
* Using Stylus to create maintainable, modular CSS

```js
// Dynamic path prefix handling
const pathPrefix = location.pathname.includes("pages/") ? "../" : "";
```

```stylus
// Stylus sample
$primary = #f79f1a
body
  font-family: 'Montserrat', sans-serif
  background: #efe7eb
```

### 🔁 Continued Development

* Add search and filter functionality
* Implement dark mode theme toggle
* Improve accessibility (ARIA roles, contrast)
* Add pagination or infinite scroll to the homepage

### 🔗 Useful Resources

* [Stylus Docs](https://stylus-lang.com/) – For learning Stylus syntax and best practices
* [DummyJSON API](https://dummyjson.com/docs/recipes) – The backend data source
* [MDN Web Docs](https://developer.mozilla.org/) – JavaScript and Fetch API references

---

## ⚙️ Installation & Usage

### 1. Clone the repo

```bash
git clone https://github.com/Yashi-Singh-9/Recipe-Application.git
cd Recipe-Application
```

### 2. Install Stylus (Globally or Locally)

**Global install:**

```bash
npm install -g stylus
```

**OR local install (recommended):**

```bash
npm install stylus --save-dev
```

### 3. Run Stylus

If using local setup:

```bash
npx stylus stylus/style.styl -o assets/style.css
```

If using global Stylus:

```bash
stylus stylus/style.styl -o assets/style.css
```

Use `--watch` to automatically recompile on file changes:

```bash
stylus -w stylus/style.styl -o assets/style.css
```

### 4. Open `index.html`

Just open the `index.html` file in your browser or use a Live Server plugin in VS Code for easier development.

---

## 👤 Author

LinkedIn : [Yashi Singh](https://www.linkedin.com/in/yashi-singh-b4143a246)

---

## 🙏 Acknowledgments

Thanks to:

* [WebDevDaily](https://webdevdaily.io) for the initial project concept
* [DummyJSON](https://dummyjson.com) for providing an awesome free API
