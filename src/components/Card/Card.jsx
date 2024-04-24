import PropTypes from "prop-types";

const Card = ({ card }) => {
  const { id, title, cover_img, description, price, credits } = card;

  return (
    <div>
      <img src={cover_img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>{credits}</p>
    </div>
  );
};

Card.PropTypes = {
    card: PropTypes.object.isRequired
}

export default Card;
