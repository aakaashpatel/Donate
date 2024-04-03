import React, { useState } from "react";

const Donate = () => {
  const [amount, setamount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  return (
    <section className="donate">
      <form action="">
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Show your loves for Disable Person</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="Enter Amount "
          />
        </div>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email "
        />
        <input
          type="email"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Message "
        />
        <button type="submit" className="btn" disabled={disableBtn}>
          Donate {amount ? `$${amount}` : 0}
        </button>
      </form>
    </section>
  );
};

export default Donate;
