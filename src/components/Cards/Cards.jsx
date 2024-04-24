import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards,setCards] = useState([]);
    
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);

    return (
        <div>
           {
            
             cards.map((card) => <Card
              key={cards.id} card={card}>

              </Card>)
           };
        </div>
    );
};

export default Cards;