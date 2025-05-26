import React, { useState } from 'react';
import './FAQSection.css'; // Create this CSS file for styling

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: 'What are the benefits of partnering with Go-Grab vending machines?',
      answer: 'Answer to the first question...',
    },
    {
      question: 'What are the benefits of partnering with Go-Grab vending machines?',
      answer: 'Answer to the second question...',
    },
    {
      question: 'What are the benefits of partnering with Go-Grab vending machines?',
      answer: 'Answer to the third question...',
    },
    {
      question: 'What are the benefits of partnering with Go-Grab vending machines?',
      answer: 'Answer to the fourth question...',
    },
    
  ];

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              <button className="dropdown-button">
                {expandedIndex === index ? '-' : '+'}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
};

export default FAQSection;
