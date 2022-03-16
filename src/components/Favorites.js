// import { useState } from "react";
import { useEffect, useState } from "react";
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle } from 'reactstrap';
const contentful = require('contentful');


function Favorites() {
  let [favoriteCars, setFavoriteCars] = useState([])

  useEffect(() => {
    let favorites = localStorage.getItem("userFavorites").split(",") ?? []
    console.log(favorites)
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE,
      accessToken: process.env.REACT_APP_TOKEN,
    });
    client.getEntries().then(function (entries) {
      let cars = entries.items
      let arr = []
      console.log(cars)
      // log the title for all the entries that have it
      cars.forEach(function (entry) {
        if (favorites.includes((entry.fields.id))) {
          arr.push(entry)
        }
      })
      setFavoriteCars(arr)
      });
    // });
  }, [])

  return (
    <div className="Favorites">
      User saves favorite cars:
<CardGroup className='CardGroup'>
      {favoriteCars.map((car, idx) => {
        return (

  
    <Card className='Card' key={idx}>
    <CardImg
      alt="Card image cap"
      src={car.fields.img[0].fields.file.url}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        { car.fields.title }
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        <p>Year: { car.fields.year }</p>
        Condition: { car.fields.condition } | Price: { car.fields.price }
      </CardSubtitle>
      <CardText>
        {car.fields.description}
      </CardText>
      <Button>Remove</Button>
    </CardBody>
  </Card>
    )
  })
}
</CardGroup>
  );

    </div>
  );
}

export default Favorites;
