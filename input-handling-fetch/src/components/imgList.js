import React from "react";

const imgList = ({ img }) => {
  const card = img.map((item) => (
    <div key={item.id} className="card">
      <img
        alt={item.alt_description}
        className="card-img-top"
        src={item.urls.regular}
      />
    </div>
  ));

  return <div className="image">{card}</div>;
};

export default imgList;
