import React from "react";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import "../../styles/testimonials/TestimonialCard.css"
type Testimonial = {
  name: string;
  desc: string;
  imgSrc: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, imgSrc, desc } = testimonial;

  return (
    <div className="testimonial-card">
      <div className="h-full text-center">
        <Image
          alt="profile"
          className="inline-block"
          src={imgSrc}
          width={80}
          height={80}
        />
        <p className="leading-relaxed">{desc}</p>
        <div className="stars">
          <RiStarSFill className="inline-block" />
          <RiStarSFill className="inline-block" />
          <RiStarSFill className="inline-block" />
          <RiStarSFill className="inline-block" />
          <RiStarSFill className="inline-block" />
        </div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
