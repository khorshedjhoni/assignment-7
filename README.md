# 🛒 বাজার দর | BazarDor

### Your Everyday Market Price Guide

**বাজার দর (BazarDor)** is a web application designed to help users explore the latest prices of everyday essentials in Bangladesh. From rice, lentils, and vegetables to fish, meat, eggs, and spices, users can browse product information and stay informed about market prices in one place.

## ✨ Key Features

* **📊 Market Price Updates:** Explore market prices of essential everyday products.
* **🗂️ Product Categories:** Browse products by category for easy navigation.
* **🔐 Secure Authentication:** Sign up and sign in using Better Auth, with Google and GitHub authentication if configured.
* **👤 User Profile Management:** View and update your profile information.
* **📱 Responsive Design:** Enjoy a user-friendly experience across desktop, tablet, and mobile devices.

## 🛠️ Technologies Used

* **Next.js** — React framework for building the application.
* **React** — Component-based user interface.
* **Tailwind CSS** — Utility-first styling for responsive layouts.
* **DaisyUI** — Prebuilt UI components.
* **Better Auth** — Authentication and session management.
* **MongoDB** — Database for application data and authentication.
* **Resend** — Email delivery for authentication-related emails, if configured.
* **React Hot Toast** — User notifications.
* **Git & GitHub** — Version control and source code hosting.
* **Vercel** — Application deployment.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment-7
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables in a `.env.local` file. Add the variables required by your project, such as your MongoDB connection string, Better Auth secret, application URL, and email API key if applicable.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open http://localhost:3000 in your browser.

## ⚙️ Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server          |
| `npm run lint`  | Run lint checks, if configured       |

## 🌐 Deployment

The application can be deployed on [Vercel](https://vercel.com/).

Connect your GitHub repository to Vercel, configure the required environment variables, and deploy your project.

## 🎯 Project Goal

The goal of BazarDor is to make everyday market price information easier to access and help people explore essential products conveniently through a simple, responsive web application.

---

**Built with ❤️ using Next.js and React.**
