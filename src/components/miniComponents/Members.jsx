import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Sanjay",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Jackey",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Vishnu",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Aklesh",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Narendra",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Hooda",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Haarish",
    },
  ];
  return (
    <section className="members">
      <div className="container">
        <div className="heading_section">
          <h2 className="heading">MEMBERS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            mollitia, placeat, architecto minus voluptatibus eum, hic fugit
            expedita ab consectetur est. Blanditiis nobis laborum libero nam
            neque eaque porro debitis.
          </p>
        </div>
        <div className="members_container">
          {members.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.id} />
                <h3>Name :{element.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Members;
