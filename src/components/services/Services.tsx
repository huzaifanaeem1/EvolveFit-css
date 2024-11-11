import React from "react";
import ServiceCard from "./ServiceCard";
import { SectionTitle } from "..";
import "../../styles/services/Services.css"
const Services = () => {
  const services = [
    { id: 1, name: "Physical Fitness", imageUrl: "/images/img1.jpg" },
    { id: 2, name: "Weight Gain", imageUrl: "/images/img2.jpg" },
    { id: 3, name: "Strength Training", imageUrl: "/images/img3.jpg" },
    { id: 4, name: "Fat Loss", imageUrl: "/images/img4.jpg" },
    { id: 5, name: "Weight Lifting", imageUrl: "/images/img5.jpg" },
    { id: 6, name: "Running", imageUrl: "/images/img6.jpg" },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <SectionTitle first="Our" second="Services" />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              name={service.name}
              image={service.imageUrl}
              imageAlt={service.name}
              key={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
