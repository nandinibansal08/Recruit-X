# 🚀 RecruitX – AI Interview Preparation

RecruitX is an AI-powered interview preparation platform designed to help users practice mock interviews, improve their answers, and gain personalized feedback on their interview performance.

The platform provides an interactive interview experience where users can practice interview questions and receive AI-driven feedback to identify their strengths and areas for improvement.

---

## 📌 Features

* 🤖 **AI-Powered Mock Interviews**
  Practice realistic interview questions through an interactive AI-driven question-and-answer experience.

* 🎯 **Personalized Interview Practice**
  Practice interviews based on your selected role and requirements.

* 💬 **Interactive Q&A Experience**
  Answer interview questions and receive feedback based on your responses.

* 📊 **Performance Feedback**
  Get insights into your interview performance and identify areas that need improvement.

* 🔐 **Secure Authentication**
  User authentication and account management for a personalized experience.

* 👤 **User Management**
  Users can manage their interview preparation activities through their account.

* 📱 **Responsive Design**
  Optimized interface for desktop, tablet, and mobile devices.

* ⚡ **Fast and Modern UI**
  Built with modern web technologies for a smooth and responsive user experience.

---

## 🛠️ Technologies Used

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **JavaScript**
* **HTML5**
* **CSS3**

### Backend / Services

* **Firebase**
* **AI-powered interview functionality**
* **Authentication**

### UI & Development Tools

* **shadcn/ui**
* **Lucide Icons**
* **ESLint**
* **npm**

### Deployment

* **Vercel**

---

## 🏗️ Project Structure

```text
RecruitX-main/
│
├── app/                 # Application pages and routes
├── components/          # Reusable UI components
├── constants/           # Application constants
├── firebase/            # Firebase configuration and services
├── lib/                 # Utility functions and helpers
├── public/              # Static assets
├── types/               # TypeScript type definitions
│
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── ...
```

---

## ⚙️ How to Run Locally

Follow these steps to run RecruitX on your local machine.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd RecruitX-main
```

---

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

Add the required environment variables for your Firebase and AI services.

Example:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Never commit your `.env.local` file or expose API keys and other secrets publicly.

---

### 4. Start the Development Server

Run:

```bash
npm run dev
```

The application will start on:

```text
http://localhost:3000
```

Open the URL in your browser to access RecruitX.

---

## 📸 Screenshots

Add screenshots of the main sections of your application here.

Recommended screenshots:

### 🏠 Home Page

![RecruitX Home Page](screenshots/home.png)

### 🎤 Interview Page

![RecruitX Interview Page](screenshots/interview.png)

### 📊 Feedback / Performance Page

![RecruitX Feedback Page](screenshots/feedback.png)

### 🔐 Authentication Page

![RecruitX Authentication](screenshots/login.png)

> Create a `screenshots` folder in your repository and place your screenshots inside it. GitHub supports relative image paths in README files, so paths such as `screenshots/home.png` can be used directly.

---

## 🌐 Live Demo

🔗 **Live Application:**
YOUR_VERCEL_DEPLOYMENT_URL

Example:

```text
https://your-project.vercel.app
```

---

## 💻 GitHub Repository

🔗 **Source Code:**
YOUR_GITHUB_REPOSITORY_URL

Example:

```text
https://github.com/your-username/RecruitX
```

---

## 🎯 How RecruitX Works

```text
User
  ↓
Sign Up / Login
  ↓
Select Interview / Role
  ↓
Start Mock Interview
  ↓
Answer AI-Generated Questions
  ↓
AI Evaluates Responses
  ↓
Personalized Feedback
  ↓
Improve Interview Performance
```

---

## 💡 Why RecruitX?

Interview preparation can be difficult when users don't have someone available to conduct mock interviews or provide feedback.

RecruitX provides an accessible platform where users can:

* Practice interviews independently
* Experience realistic interview questions
* Receive AI-generated feedback
* Identify areas for improvement
* Build confidence before real interviews

---

## 🔮 Future Improvements

Some potential improvements for future versions include:

* 📈 Advanced performance analytics
* 🎙️ Voice-based interviews
* 🗣️ Speech and communication analysis
* 📚 Question bank categorized by job role
* 🏆 Interview performance history
* 📊 Progress tracking dashboard
* 🌍 Multiple language support
* 📄 Resume-based interview questions

---

## 👩‍💻 Author

**Nandini Bansal**

B.Tech – Computer Science Engineering

Interested in **Full Stack Development, AI-powered applications, and modern web technologies**.

---

## ⭐ Support

If you find RecruitX useful, consider giving the repository a ⭐ on GitHub!

---

## 📄 License

This project is developed for educational and portfolio purposes.
