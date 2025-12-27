# React Router Practice (Vite + React)

This project was built to **practice and understand the basics of React Router** using a React + Vite setup.

The main goal was **not UI design**, but learning how routing works in a real project by integrating it into **pre-built components** like Header, Footer, and Pages.

---

## 🎯 Purpose of This Project

- Learn **React Router from scratch**
- Understand how routing works in a Single Page Application (SPA)
- Practice:
  - `BrowserRouter`
  - `Routes` and `Route`
  - `Link` and `NavLink`
  - Layout-based routing (Header & Footer persistence)
- Integrate routing into an **existing UI**, not a blank app

This is a **learning-focused project**, not a production-ready application.

---

## 🛠 Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Git & GitHub

---

## 📁 Project Structure

src/
├── assets/               # Images and static assets
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Home/
│   ├── About/
│   └── Contact/
├── Layout.jsx            # Shared layout with Header + Footer
├── App.jsx               # Route definitions
├── main.jsx              # App entry point

---

## 🧭 Routing Overview

- `/` → Home
- `/about` → About page
- `/contact` → Contact page

The `Layout` component is used to keep the **Header and Footer persistent** while page content changes using React Router’s `<Outlet />`.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/AyushSahu143/ReactRouter.git
cd ReactRouter
