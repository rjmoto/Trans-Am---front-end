import React from "react";
import garage from "./garage.jpg"
import { CardImg } from 'reactstrap'

function Home() {
  return (
    <div className="Home">Home Page Content / Home Component
      {/* <img src={garage} width="100%" alt="Garage" /> */}
      <CardImg
      alt="Card image cap"
      src={garage}
      top
      width="100%"
      />
      <p>Trans Am Time Machines is a full-service auto restoration shop.  Although we happily restore, modify, and customize all makes and models, we've come to specialize in the iconic Pontiac Trans Ams.  Clients all around the world seek us out for our inventory of parts, project cars, survivors, and fully restored cars as well as their own projects.  Over the past 20 years, we have become the leading experts in the restoration of classic Trans Ams.</p>
    </div>

  );
}

export default Home;
