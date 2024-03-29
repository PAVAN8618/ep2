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
        src={`https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/${cloudinaryImageId}`}
        alt="img-card"
      />
      <div className="card-text">
        <p>{name}</p>
        <p>
          {cuisines[0]} ,{cuisines[1]}
        </p>

        <p>{costForTwo}</p>
        <p>{avgRating}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
export default Card;
