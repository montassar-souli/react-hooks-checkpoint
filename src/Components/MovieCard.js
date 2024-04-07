import React, { useState } from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  const [visible, setVisible] = useState("none");
  return (
    <div className="w-64 m-4 bg-indigo-900 rounded shadow-black overflow-hidden relative">
      <img className="max -w-full" src={posterURL} alt="title" />
      <div className="flex p-2 justify-between items-center ">
        <h3 className="m-0">{title}</h3>
        <span>{rating}</span>
      </div>
      <p className="absolute inset-x-0 bottom-0 bg-neutral-50 text-black p-2 max-h-full hidden">
        Description : {description}
      </p>
      <button onClick="">Show description</button>
    </div>
  );
};

export default MovieCard;
