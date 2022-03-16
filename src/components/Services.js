import React from "react";
import { CardImg } from 'reactstrap'
import restoration from "./restoration.jpg"
import underbody from "./underbody.jpg"


function Services() {
  return (
    <div className="Services">
      <ul>
        <li>Restorations</li>
        <p></p>
        <li>Sales - including consignment</li>
        <p></p>
        <li>Trans Am parts</li>
      </ul>
      <CardImg
      alt="Card image cap"
      src={restoration}
      top
      width="50%"
      />
      <p></p>
            <CardImg
      alt="Card image cap"
      src={underbody}
      top
      width="50%"
      />
    </div>
  );
}

export default Services;
