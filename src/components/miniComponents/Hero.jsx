import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, sed ad
          neque animi iusto deserunt rerum aspernatur enim esse, et quos alias
          dolor numquam deleniti architecto nobis facilis vero. Neque impedit
          temporibus aperiam quidem voluptatum quod, quisquam dolor, animi ex,
          tenetur laboriosam blanditiis ab fugit unde? Enim sit sapiente totam.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="./hero.png" alt="img" />
      </div>
    </section>
  );
};

export default Hero;
