import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ITServiceFAQ() {
  const faqData = [
    {
      question: "What IT consulting services do you offer?",
      answer:
        "We offer IT strategy consulting, IT infrastructure management, and IT project implementation, helping businesses optimize their digital transformation.",
    },
    {
      question: "Do you provide custom software development?",
      answer:
        "Yes, we develop custom software solutions tailored to your business needs, enhancing productivity and automating critical processes.",
    },
    {
      question: "How do your cloud solutions benefit businesses?",
      answer:
        "Our cloud services are secure and scalable, enabling seamless data management and efficient resource utilization for growing businesses.",
    },
    {
      question: "What cybersecurity measures do you implement?",
      answer:
        "We implement multi-layered security protocols, including firewalls, intrusion detection systems, and vulnerability assessments to protect your data.",
    },
    {
      question: "Can you integrate existing systems with new technologies?",
      answer:
        "Absolutely! We ensure smooth integration of legacy systems with modern solutions to enhance efficiency and minimize downtime.",
    },
    {
      question: "Do you offer IT support and maintenance?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your IT infrastructure remains reliable, secure, and up-to-date.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We cater to various industries, including healthcare, finance, education, and retail, offering tailored solutions for each sector.",
    },
    {
      question: "How do you ensure data security during software development?",
      answer:
        "We follow secure coding practices and conduct thorough testing to prevent vulnerabilities, ensuring data safety throughout the development process.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-400">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ITServiceFAQ;
