import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <main>
        <section className="form">
          <div className="contact-head">We would love to hear from you</div>

          <div className="form-box">
            <label className="label">Email Address</label>
            <input className="input" placeholder="Enter your email address" />
          </div>

          <div className="form-box">
            <label className="label">Write your message</label>
            <textarea className="tarea"></textarea>
          </div>

          <button className="contact-but">Send message</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
