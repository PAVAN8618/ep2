const Card = ({ resturent }) => {
  const { id, name, cuisines, areaName, cloudinaryImageId, avgRating } =
    resturent.info;
  return (
    <div className="card">
      <img
        className="img_card"
        src="https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="img-card"
      />
      <div className="card-text">
        <p>{name}</p>
        <p>{cuisines[0]}</p>
        <p>{cuisines[1]}</p>
        <p>{avgRating}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};
export default Card;
