import React from "react";
import { SectionTitle } from "..";
import "../../styles/contact/contact.css"

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <SectionTitle first="Contact" second="Us" />
            <p className="contact-description">
              Have questions or need help getting started? Reach out to us—we’re here to guide you on your fitness journey every step of the way!
            </p>
          </div>
          <div className="contact-form mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="text-white leading-7 text-md">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="text-white leading-7 text-md">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="text-white leading-7 text-md">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="input-field h-32"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
