import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FAQ = [
  {
    id: 1,
    question: "How to buy a product?",
    answer:
      "To buy a product, simply click on the product you want to purchase and follow the checkout process.",
  },
  {
    id: 2,
    question: "How can i make refund from your website?",
    answer:
      "To make a refund, please contact our customer support team and provide your order number and reason for refund.",
  },
  {
    id: 3,
    question: "I am a new user. How should I start?",
    answer:
      "Welcome! To get started, simply create an account and explore our website to find the products you need.",
  },
  {
    id: 4,
    question: "Returns and refunds",
    answer:
      "We offer a 30-day return policy. If you're not satisfied with your purchase, please contact us to initiate the return process.",
  },
  {
    id: 5,
    question: "Are my details secured?",
    answer:
      "Yes, our website uses TLS (transport layer security) encryption to ensure that your personal and payment details are secure.",
  },
];

export default function AccordionUsage() {
  return (
    <div>
      {FAQ.map((item, index) => (
        <Accordion key={item.id} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{fontFamily:"cursive",fontWeight:"bold"}}>
            {item.question}
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
