import React from "react";
import TestimonialCard from "./TestimonialCard";
import { SectionTitle } from "@/components";
import "../../styles/testimonials/Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James",
      desc:
        "EvolveFit has completely transformed my approach to fitness! The trainers are so motivating, and the workouts are challenging but enjoyable. I've seen amazing results and feel stronger every day.",
      imgSrc: "/images/testemonial1.jpg",
    },
    {
      id: 2,
      name: "Alex M",
      desc:
        "Joining EvolveFit was the best decision for my health. The support and encouragement I get from the team make all the difference. I’ve lost weight, gained muscle, and found a community that keeps me going!",
      imgSrc: "/images/testemonial2.jpg",
    },
    {
      id: 3,
      name: "Henry",
      desc:
        "I never thought I'd enjoy going to the gym, but EvolveFit changed that. Their personalized approach helped me achieve my goals without feeling overwhelmed. I’m in the best shape of my life, and I owe it all to the EvolveFit family!",
      imgSrc: "/images/testemonial3.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <SectionTitle first="Our" second="Testimonials" />
        <p className="testimonials-description">
          See how EvolveFit has helped transform the lives of our clients. Their stories of dedication, progress, and success speak to the impact of our programs and the strength of our community.
        </p>
        <div className="testimonials-cards">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
