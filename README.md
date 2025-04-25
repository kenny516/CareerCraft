# 🚀 CareerCraft - Your AI Interview Coach

> 🎯 Prepare for job interviews like never before with AI!

CareerCraft is a modern web application that revolutionizes job interview preparation through artificial intelligence. Simulate realistic interviews and receive detailed feedback to shine in your future interviews! ✨

## ⭐ Key Features

- 🤖 **AI Interview Simulation**: Practice with an intelligent and responsive AI interviewer
- 📝 **Personalized Interviews**: Questions generated based on your profile and goals
- 📊 **Detailed Feedback**: In-depth analysis with scores and personalized advice
- 🔐 **Secure Authentication**: Data protection with Firebase
- 🎨 **Elegant Interface**: Modern and intuitive design with Tailwind CSS

## 🛠️ Prerequisites

- 📦 Node.js 18+
- 🔥 Firebase Account
- 🔑 Required API Keys:
  - 🧠 Google AI (Gemini)
  - 🎙️ VAPI
  - 🔒 Firebase Admin

## 🚀 Installation

1. 📥 Clone the repository:

```bash
git clone https://github.com/kenny516/CareerCraft.git
cd CareerCraft
```

2. ⚡ Install dependencies:

```bash
npm install
# or
yarn install
```

3. 🔧 Configure environment variables:
   - 📝 Copy `.env.exemple` to `.env.local`
   - ✏️ Fill in the following variables:

```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key_gemini
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
```

4. 🌟 Start the development server:

```bash
npm run dev
# or
yarn dev
```

🌐 The application will be available at [http://localhost:3000](http://localhost:3000)

## 🛠️ Technologies Used

- 🎨 **Frontend**: Next.js 15, React, TypeScript
- 💅 **Styling**: Tailwind CSS, Shadcn UI
- 🔥 **Backend**: Firebase (Auth & Firestore)
- 🤖 **AI**: Google AI (Gemini), VAPI
- 🔒 **Authentication**: Firebase Auth
- 💾 **Database**: Firestore

## 📁 Project Structure

- 📱 `/app` - Next.js routes and pages
- 🧩 `/components` - Reusable React components
- 🛠️ `/lib` - Utilities, actions and SDK
- 🖼️ `/public` - Static assets
- 📝 `/types` - TypeScript types
- 🔥 `/firebase` - Firebase configuration

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest ideas
- 🔧 Submit pull requests
- 📜 Review code
