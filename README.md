# Week 8: React Fundamentals — Components, Props, State & Events

## Author
- **Name:** Christine Kamau
- **GitHub:** kaywambui-1
- **Date:** August 09, 2026

## Project Description
A solo practice project covering Lesson 15 (JSX, components, props, component composition) and Lesson 16 (state and event handling) — foundational React concepts built ahead of the CommunityHub team project. Built with React + Vite.

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- ESLint
- CSS

## Features
- **JSX basics** — heading, dynamic content, and conditional rendering ("Welcome back!" message)
- **Reusable components** — `Header`, `Footer`, `PostCard`, `Sidebar`, `Button` built and composed together
- **Props** — dynamic `Greeting` and `PostCard` components, a list of posts rendered from an array with `.map()`, and a `Button` with default prop values (variant, size, disabled)
- **Component composition** — `Card` with `children` and an optional title prop, `Layout` wrapping `Header`/`main`/`Footer` via `children`, `UserGreeting` with early-return conditional rendering
- **State with `useState`** — `Counter` (increment/decrement/reset), `Toggle` (boolean state), `UserForm` (multiple controlled inputs for name/email/age)
- **Event handling** — multiple handler patterns in `EventExamples.jsx`, and a `ContactForm` using a single `formData` state object with computed property names and reset-on-submit
- **Array state** — `TodoList` with add/toggle/delete using spread, `.map()`, and `.filter()`
- **Lifting state up** — `Stats`, `LikeablePost`, and `PostList2` sharing like-count state, with a running total computed via `.reduce()`

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

## Lessons Learned
Learned how to share state between sibling components (like LikeablePost and Stats) by moving that state up to their common parent (App.jsx).

## Challenges Faced
Managing multiple related pieces of form state individually (in UserForm) got repetitive.
