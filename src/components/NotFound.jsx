import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="content">
        <h1>404 Not found</h1>
        <Link to={"/"} className="btn">
          Click here{" "}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
