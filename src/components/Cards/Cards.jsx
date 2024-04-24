import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({handleAddToCarts}) => {

    const [cards,setCards] = useState([]);
    
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, []);

    return (
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-2 md:grid-cols-2 gap-x-8 gap-y-12">
        {cards.map((card, idx) => (
          <Card handleAddToCarts={handleAddToCarts} key={idx} card={card}></Card>
        ))}
        ;
      </div>
    );
};

Cards.propTypes = {
  handleAddToCarts: PropTypes.func.isRequired,
};



export default Cards;