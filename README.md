# Chef Claude - React Recipe Generator

This is a **React learning project** that demonstrates building an interactive recipe generation app using modern React concepts and AI integration.

## 🎯 Learning Objectives

This project was built to practice and learn:
- React hooks (useState)
- Component composition and props
- Form handling and controlled inputs
- API integration with AI services
- Error handling and user feedback
- Environment variable management

## 🍳 What it does

Chef Claude is a recipe generator that:
- Lets users add ingredients to their pantry
- Generates personalized recipes using AI when you have 4+ ingredients
- Uses **metric measurements** (grams, milliliters, etc.) for international users
- Renders recipes in beautiful markdown format
- Provides helpful fallback recipes when AI services are unavailable

## 🛠️ Tech Stack

- **React 18** with Hooks
- **Vite** for fast development and building
- **Hugging Face Inference** for AI recipe generation
- **React Markdown** for recipe formatting
- **ESLint** for code quality

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Add your Hugging Face API token to `.env`:
   ```
   VITE_HUGGING_FACE_ACCESS_TOKEN=your_token_here
   ```
4. Start the development server: `npm run dev`

## 📚 React Concepts Demonstrated

- Functional components with hooks
- State management with `useState`
- Event handling and form submission
- Conditional rendering
- Component communication via props
- Async operations and API calls
- Error boundaries and graceful degradation

---
