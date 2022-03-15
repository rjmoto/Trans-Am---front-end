import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button, CardSubtitle } from 'reactstrap';
import { useEffect, useState } from 'react';
import { config } from 'dotenv';
const contentful = require('contentful');

function ForSale() {
  let [cars, setCars] = useState([])
  useEffect(() => {
    const client = contentful.createClient({
      space: {process.env.REACT_APP_SPACE},
      accessToken: {process.env.REACT_APP_TOKEN},
    });
    client.getEntries().then(function (entries) {
      setCars (entries.items)
      console.log(cars)
      // log the title for all the entries that have it
      cars.forEach(function (entry) {
        let car = entry.fields
        console.log(car)
      });
    });
  }, [])
  

  return (
<CardGroup className='CardGroup'>
{
  cars.map((car, idx) => {
  console.log(car, "cars")
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
        <p>Year: { car.fields.year }
</p>
        Condition: { car.fields.condition } | Price: { car.fields.price }



      </CardSubtitle>
      <CardText>
        {car.fields.description}
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
    )
  })
}
{/*   
  <Card className='Card'>
    <CardImg
      alt="Card image cap"
      src="https://transamflorida.com/TRANSAaaa51.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.       This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card className='Card'>
    <CardImg
      alt="Card image cap"
      src="https://transamflorida.com/1753_12.jpg"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.       This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card> */}
  {/* <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card> */}
</CardGroup>
  );
}

export default ForSale;
