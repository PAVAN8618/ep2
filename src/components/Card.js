const Card = ({ resturent }) => {
  const {
    id,
    name,
    cuisines,
    areaName,
    cloudinaryImageId,
    avgRating,
    costForTwo,
  } = resturent.info;
  return (
    <div className=" m-4 bg-emerald-50  w-[210] h-[250] overflow-hidden shadow-lg hover:bg-emerald-100 rounded-lg">
      <img
        className="w-[150] h-[150] text-center rounded-2xl p-2 ml-8"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="img-card"
      />
      <div className="p-2 text-xs text-center  text-pink-950">
        <p className="text-lg">{name}</p>
        <p>
          {cuisines[0]} , {cuisines[1]}
        </p>

        <p>{avgRating}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

//Higher order function

export const withPromotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
