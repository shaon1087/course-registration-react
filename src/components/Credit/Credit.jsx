import PropTypes from "prop-types";

const Credit = ({ carts, totalCredit, remainingCredit }) => {
  return (
    <div className="w-full h-auto bg-base-100 shadow-xl rounded-lg">
      <div>
        <p className="px-4 py-4 border-b-2 text-lg font-bold text-blue-700">
          Credit Hour Remaining {remainingCredit} hr
        </p>
      </div>
      <h1 className="px-4 py-1 text-xl font-bold">Course Name</h1>
      <div className="px-4 py-4">
        {
        carts.map((card, idx) => (
          <ol key={idx}>{card.id}.{card.title}</ol>
        ))
        }
      </div>
      <div className="px-4 py-4 border-t-2">
        <p className="text-base font-medium">
          Total Credit Hour: {totalCredit}
        </p>
      </div>
    </div>
  );
};

Credit.propTypes = {
  carts: PropTypes.array,
  totalCredit: PropTypes.number,
  remainingCredit: PropTypes.number,
};

export default Credit;
