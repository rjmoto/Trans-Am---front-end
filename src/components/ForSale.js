import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { useEffect, useState } from 'react';

const contentful = require('contentful');

function ForSale() {
  const [cars, setCars] = useState([])
  const [favorites, setFavorites] = useState([])
  const [checkedState, setCheckedState] = useState([false]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE,
      accessToken: process.env.REACT_APP_TOKEN,
    });
    client.getEntries().then(function (entries) {
      setCars (entries.items)
      console.log(cars)
      let arr = new Array(entries.items.length).fill(false)
      setCheckedState(arr)

      // log the title for all the entries that have it
      cars.forEach(function (entry) {
        let car = entry.fields
        console.log(car)
      });
    });
  }, [])

  const handleChange = (id, idx) => {
    id = parseInt(id);
    const arr = favorites
    if (favorites.includes(id)) {
      let favIndex = favorites.indexOf(id)
      arr.splice(favIndex, 1)
    } else { 
      arr.push(id)
    }
    setFavorites(arr)
    localStorage.setItem('userFavorites', favorites)
    console.log(favorites)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === idx ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  

  return (
<CardGroup className='CardGroup'>
{
  cars.map((car, idx) => {
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
      <label>
        <input name="favorite" id={car.fields.id} checked={checkedState[idx]} onChange={() => handleChange(car.fields.id, idx)} type="checkbox"/> Add to Favorites
      </label>
      
    </CardBody>
  </Card>
    )
  })
}
</CardGroup>
  );
}

export default ForSale;
