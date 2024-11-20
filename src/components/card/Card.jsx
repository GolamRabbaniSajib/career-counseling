
import { NavLink } from "react-router-dom";



const Card = ({ card }) => {
  const { id,Image, ServiceName, Category, Counselor, Pricing } = card;
  
  return (
    <div>
      <div className="card card-compact bg-base-100 border hover:bg-purple-200" data-aos="flip-left">
        <figure className="p-4">
          <img className="rounded-xl "
            src={Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="text-sm font-black">{ServiceName}</h2>
          <p className="text-xl font-bold">{Counselor}</p>
          <div className="grid grid-cols-2 space-x-4">
            <p className="font-semibold">Category:</p>
            <p className="font-semibold">{Category}</p>
          </div>
          <div>
            <h1 className="text-green-600 font-semibold text-xl">{Pricing}</h1>
          </div>
          <div className="card-actions">
            <NavLink to={`/details/${id}`}><button className="btn btn-neutral flex-grow-0 font-semibold">Learn More</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
