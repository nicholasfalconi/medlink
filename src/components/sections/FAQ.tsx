
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is The MedLink Project?",
    answer: "The MedLink Project is a mentorship initiative created by medical students to guide and support undergraduate students aspiring to pursue medicine. Our program connects mentees with medical student mentors and provides free resources on key topics like MCAT preparation, Casper, medical school applications, and interviews.",
  },
  {
    question: "How do I apply for mentorship?",
    answer: "You can apply for mentorship by filling out our online application form. This form allows you to indicate your goals, areas of interest, and whether you're looking for a one-time session or ongoing mentorship. Once submitted, we will match you with a mentor based on availability and compatibility.",
  },
  {
    question: "What happens if I'm not matched with a mentor right away?",
    answer: "Due to high demand and limited mentor capacity, some mentees may not be matched immediately. In the meantime, you can access our extensive online resources, including preparation guides for Casper, MCAT, medical school applications, and interviews, as well as recorded virtual events for additional guidance.",
  },
  {
    question: "Is the mentorship program free?",
    answer: "Yes, The MedLink Project is completely free. We believe that mentorship should be accessible to all, regardless of financial background.",
  },
  {
    question: "What kind of support can mentors provide?",
    answer: "Mentors offer personalized guidance based on their own experiences with the medical school application process. They can help with crafting applications, preparing for interviews, studying for the MCAT, and answering general questions about medical school and student life.",
  },
  {
    question: "How do I indicate my preferences for mentorship?",
    answer: "When completing the application form, you can specify your preferences for mentorship. For example, you can indicate if you're looking for a single session to address a specific question or if you'd like ongoing support. This helps us match you with a mentor who can meet your needs.",
  },
  {
    question: "What are the expectations for mentees?",
    answer: "As a mentee, you're expected to approach this opportunity with preparation and respect for your mentor's time. This includes coming prepared to meetings, being clear about your goals, and using our available resources to enhance your understanding. Communication and mutual respect are key to a successful mentorship relationship.",
  },
  {
    question: "Are mentors only from a specific medical school?",
    answer: "Currently, our mentors are primarily from the University of Ottawa, University of Toronto, and Queen's University but we are working to expand the program to include medical students from other institutions in Canada.",
  },
  {
    question: "What additional resources are available if I'm not matched?",
    answer: "In addition to mentorship, The MedLink Project offers a wealth of free resources, including preparation guides for Casper, MCAT, medical school applications, and interviews. We also have recorded virtual events and workshops available for reference, covering a variety of topics related to medical school preparation.",
  },
  {
    question: "Is there a way to ask general questions?",
    answer: "Yes! We have a general question page monitored by over 20 medical students. If you have specific questions, you can submit them, and one of our volunteers will email you a personalized response. This ensures that every participant receives timely and helpful support, even if they are not yet matched with a mentor.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about The MedLink Project
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
