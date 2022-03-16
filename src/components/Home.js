import React from "react";
import garage from "./garage.jpg"
import { CardImg } from 'reactstrap'

function Home() {
  return (
    <div className="Home">
          <p className="Info">Welcome to Trans Am Specialities!  We’ve been in the business to restoring classic Pontiac Trans Ams for over 20 years with satisfied customers around the globe.  If you’re looking to buy a T/A, check out our sales page.  If you’d like to breathe new life into your existing car, please contact us for a restoration estimate.  
          </p>
          <p className="Info">
          We specialize in the restoration of many 1970 – 1981 Trans Ams and can build one to fit your budget! Whether you want a matching #’s true Special Edition Trans Am (Bandit or Pace Car Edition) or a Modern version of the iconic Bandit or simply want a high quality cruise night or show quality clone we can make your childhood dreams come true! You have day dreamed long enough! The time has come to spoil your self with 300 pavement pounding horsepower, or perhaps 1000 Hp, we can do it!. So take off the t-tops and prepare to be amazed when Trans Am Specialties builds the car of your dreams!
          </p>
          <p className="Info">
          If you are visiting this site you probably share the same passion for the second generation Trans Am.
          </p>
      <CardImg
      alt="Card image cap"
      src={garage}
      top
      width="100%"
      />
    </div>
  );
}

export default Home;
