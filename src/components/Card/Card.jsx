import PropTypes from "prop-types";

const Card = ({ card, handleAddToCarts }) => {
  const {title, cover_img, description, price, credit } = card;

  return (
    <div>
      <div className="w-72 bg-base-100 shadow-xl rounded-lg">
        <figure className="px-4 py-2">
          <img src={cover_img} alt="Shoes" className="rounded-sm" />
        </figure>
        <div className="w-full px-4 align-middle space-y-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm font-medium h-12">{description}</p>
          <div className="flex justify-between py-2">
            <div>
              <p className="text-base font-medium">$ Price: {price}</p>
            </div>
            <div>
              <p className="text-base font-medium">Credit: {credit}hr</p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 py-4">
          <button
            onClick={() => handleAddToCarts(card)}
            className="btn btn-primary bg-blue-500 w-full text-white border-white text"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleAddToCarts: PropTypes.func.isRequired,
};

export default Card;
