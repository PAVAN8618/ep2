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
    <div className="card">
      <img
        className="img_card"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="img-card"
      />
      <div className="card-text">
        <p>{name}</p>
        <p>
          {cuisines[0]} , {cuisines[1]}
        </p>
        <p>{id}</p>
        <p>{costForTwo}</p>
        <p>{avgRating}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
export default Card;
