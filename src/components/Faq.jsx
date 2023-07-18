import React, { useState } from "react";
import FaqContent from "./FaqContent";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question:
        "How Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non..",
      open: false,
    },
    {
      question: "consectetur adipisicing elit?",
      answer:
        "Ab voluptatum illo quae explicabo a rerum perferendis expedita veritatis facilis dicta. Accusamus similique ipsum temporibus dicta! Deserunt architecto, natus pariatur adipisci",
      open: false,
    },
    {
      question: "sit amet consectetur adipisicing elit. Aspernatur?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus est quidem ducimus.",
      open: false,
    },
    {
      question:
        "How Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non.?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, non..",
      open: false,
    },
    {
      question: "consectetur adipisicing elit?",
      answer:
        "Ab voluptatum illo quae explicabo a rerum perferendis expedita veritatis facilis dicta. Accusamus similique ipsum temporibus dicta! Deserunt architecto, natus pariatur adipisci",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div className="faqs-con">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FaqContent
              faq={faq}
              index={index}
              key={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
