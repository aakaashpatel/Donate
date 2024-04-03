import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "Community-driven",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ex vitae praesentium veniam explicabo facere commodi sequi, laboriosam molestiae quas officia excepturi labore totam beatae!",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "Transparent and Open Source",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ex vitae praesentium veniam explicabo facere commodi sequi, laboriosam molestiae quas officia excepturi labore totam beatae!",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "Impact",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ex vitae praesentium veniam explicabo facere commodi sequi, laboriosam molestiae quas officia excepturi labore totam beatae!",
    },
  ];
  return (
    <div className="qualities">
      <h2>Our Qualities</h2>
      <div className="container">
        {qualities.map((ele) => {
          return (
            <div className="card" key={ele.id}>
              <div className="img-wrapper">
                <img src={ele.image} alt={ele.title} />
              </div>
              <div className="content">
                <p className="title">{ele.title}</p>
                <p className="title">{ele.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Qualities;
