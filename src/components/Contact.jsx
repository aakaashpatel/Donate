import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h2>Contact Us</h2>
            <div>
              <input
                type="text"
                id=""
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                id=""
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                id=""
                value={Phone}
                placeholder="Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              rows={10}
              value={Message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
