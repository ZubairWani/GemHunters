import React, { useState } from 'react'
import { Section } from '../../Section/Section';

export const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 48-hour refund policy from the moment you join the community. If you wish to request a refund within this timeframe, please contact us at hello@gemhunters.co. Refunds will be issued in USD or USDT, regardless of the USD value at the time of payment completion on the platform.",
    },
    {
      question: "What are the requirements to join Gem Hunters?",
      answer: "You need to be interested in crypto trends and willing to explore new market opportunities.",
    },
    {
      question: "How long is my membership for?",
      answer: "Your membership is valid for 12 months from the date of registration.",
    },
    {
      question: "Who is Gem Hunter for?",
      answer: "You need to be interested in crypto trends and willing to explore new market opportunities.",
    },
    {
      question: "Where is the Gem Hunter Community Hosted?",
      answer: "You need to be interested in crypto trends and willing to explore new market opportunities.",
    },
    {
      question: "What is Gem Hunters?",
      answer: "You need to be interested in crypto trends and willing to explore new market opportunities.",
    },
   
  ];
    return (
        <Section name={"flex-row faq"}>
            <h2>
        FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
      </h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              style={{
                maxHeight: activeIndex === index ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
        </Section>
    )
}
