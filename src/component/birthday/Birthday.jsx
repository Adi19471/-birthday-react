import React from "react";

import "./Birth.css";

import { useState } from "react";
import data from "./data";
const Birthday = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <React.Fragment>
      <div className="container" style={{ backgroundColor: "#192a56" }}>
        <div className="row">
          <h4 className="text-center text-primary">
            Top 7 Birthday Developers
          </h4>
          {people.map((person) => {
            const { id, name, body, image } = person;
            return (
              <>
                <div className="col-sm-4 mt-1 py-1 card ">
                  <span className="text-warning bg-dark fa-1x">
                    <a href="" className="text-white fa-2x">
                      {id}
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}
                  </span>
                  <img
                    src={image}
                    alt=""
                    className="imgData img-thumbnail shadow-5-strong mx-5 px-5 hover-shadow"
                  />
                  <small>{body}</small>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Birthday;
