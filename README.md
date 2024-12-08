# Financial Health Score Calculator

## Description
The **Financial Health Score Calculator** is a web application designed to help users assess their financial health. Users can answer a series of questions related to financial responsibility, income, savings, and spending habits. Based on their responses, the system calculates a financial score, providing users with feedback and recommendations to improve their financial health.

The app also allows users to receive a detailed financial score report via email.

## Features
- **User Registration**: Users provide basic information such as name, age, gender, and email address.
- **Interactive Survey**: Users answer questions on financial responsibility, income and savings, and spending habits.
- **Score Calculation**: Based on the user's responses, a financial score is calculated and categorized into different ranges (Excellent, Good, Needs Improvement).
- **Recommendations**: Personalized recommendations based on the calculated score.
- **Email Report**: Users can receive a detailed report of their financial score and recommendations via email.

## Tech Stack

- **Frontend**:
  - **React.js**: A JavaScript library for building user interfaces.
  - **React Router**: A library used for routing and navigating between different views in the app.

- **Email Integration**:
  - **EmailJS**: A service to send emails directly from the client-side without the need for a backend.

- **Styling**:
  - **CSS**: Used for styling the application, ensuring a responsive and user-friendly design.

- **Build Tool**:
  - **Vite**: A next-generation build tool that enables fast bundling and serves the React application during development.
  
- **No Backend**: The app does not use a backend server, relying on EmailJS for sending the email reports.


## Installation

To get started with this project, follow the instructions below.

### 1. Clone the repository

```bash
git clone https://github.com/itharanie/financial-health-score-calculator.git
```

### 2. Navigate to the project folder

```bash
cd financial-health-score-calculator
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set up environment variables
To integrate EmailJS with your project, you'll need to set up an account with EmailJS and configure the service. Follow the video tutorial [Sending Emails from React App with EmailJS | Step-by-Step Tutorial](https://www.youtube.com/watch?v=wWiTouBHibs) by Web Wizard for detailed instructions on how to set up your EmailJS account and retrieve the necessary credentials.

Once you've set up your EmailJS account, create a `.env` file in the root directory of your project and add the following variables:

```bash
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
VITE_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
VITE_EMAILJS_PUBLIC_KEY=your-emailjs-public-key
```

### 5. Run the project
```bash
npm run dev
```

## How It Works

1. **Welcome Page**:
   - Users enter their basic details (name, age, gender, and email).

2. **Form Page**:
   - The app presents a series of questions, grouped into categories, related to the user's financial habits.

3. **Results Page**:
   - Based on the answers, the app calculates a financial score, shows the result, and provides personalized feedback.

4. **Email Report**:
   - If the user chooses to receive an email, the app sends the report via **EmailJS**.



