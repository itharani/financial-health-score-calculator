import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const { userData } = location.state; // Extract userData from state

  const questions = [
    {
      category: 'Financial Responsibility',
      questions: [
        { id: 'budget', text: 'Do you have a monthly budget?', options: ['Yes', 'No'], weights:[20, 0] },
        { id: 'stickToBudget', text: 'How often do you stick to your budget?', options: ['Rarely', 'Sometimes', 'Always'], weights:[0, 10, 20]},

      ],
    },
    {
      category: 'Income and Savings',
      questions: [
        { id: 'partTimeIncome', text: 'Do you have any part-time or freelance income?', options: ['Yes', 'No'], weights:[20, 0] },
        { id: 'savingsPercentage', text: 'What percentage of your income do you save each month?', options: ['<10%', '10%-30%', '>30%'], weights:[10, 20, 30] },
      ],
    },
    {
      category: 'Spending Habits',
      questions: [
        { id: 'billPayments', text: 'How often do you pay your bills on time?', options: ['Rarely', 'Sometimes', 'Always'], weights:[0, 15, 30] },
        { id: 'expenseFunding', text: 'How do you primarily fund your monthly expenses?', options: ['Savings', 'Part-time Job', 'Parental Support', 'Student Loan'], weights:[30, 25, 15, 10] },
      ],
    },
  ];

  const handleInputChange = (e, id) => {
    setFormData({ ...formData, [id]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => {
    if (step === 1) {
      navigate('/'); // Go back to the Welcome page
    } else {
      setStep(step - 1); // Go to the previous step
    }
  };

  const handleSubmit = () => {
    let score = 0;
  
    // Iterate over all questions to calculate the score
    questions.forEach((section) => {
      section.questions.forEach((q) => {
        const answer = formData[q.id];
        const index = q.options.indexOf(answer);
        if (index !== -1) {
          score += q.weights[index];
        }
      });
    });
  
   // Pass userData along with formData and score to the Results page
   navigate('/results', { state: { userData, formData, score } });
  };
  

  return (
    <div className="form-container">
      <div className="card">
        <h2 className="category">{questions[step - 1].category}</h2>
        {questions[step - 1].questions.map((q) => (
          <div className="question" key={q.id}>
            <p className="question-text">{q.text}</p>
            <div className="options">
              {q.options.map((option, index) => (
                <label key={index} className="option">
                  <input
                    type="radio"
                    id={`${q.id}-${index}`}
                    name={q.id}
                    value={option}
                    checked={formData[q.id] === option}
                    onChange={(e) => handleInputChange(e, q.id)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div className="navigation-buttons">
          {step > 0 && 
          <button onClick={prevStep} className="btn">Back</button>}
          {step < questions.length ? (
            <button onClick={nextStep} className="btn">Next</button>
          ) : (
            <button onClick={handleSubmit} className="btn">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
