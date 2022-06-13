import React, { useState } from "react";

function RecipeDetails(props) {


  return (
    <div>
        <div id="card1" className="card mb-1" style={{ maxWidth: "70rem" }}>
          <div className="card-body  broder-0">
            <h5 className="card-title text-center" >{props.sendDate.dishName}</h5>
            <img
              src={props.sendDate.img}
              height={500}
              className="card-img-top"
            />
            <p className="card-text text-center">{props.sendDate.heading}</p>
            <p className="card-text">
              <small className="text-muted">{props.sendDate.recipe}</small>
            </p>
          </div>
        </div>;
    </div>
  );
}

export default RecipeDetails;
