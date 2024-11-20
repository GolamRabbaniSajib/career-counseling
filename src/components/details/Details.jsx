import { Link, useLoaderData } from "react-router-dom";
import CommentBox from "../../commentBox/CommentBox";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const singleData = useLoaderData();
  const { ServiceName, Image, Category, Description, Pricing, Duration, Counselor, Rating } = singleData;
//   useEffect(()=>{
//     AOS.init({duration:1200})
//   })
  return (
    <div className="my-6 w-11/12 mx-auto">
      <Helmet>
        <title>Career | Details-{ServiceName}</title>
      </Helmet>
      <div className="hero min-h-screen my-6">
        <div className="hero-content flex-col md:grid md:grid-cols-2 md:space-x-5">
          <div data-aos="fade-right">
          <img
            src={Image}
            className=" rounded-lg shadow-2xl"
          />
          </div>
          <div data-aos="fade-left">
            <h1 className="text-4xl font-bold">{ServiceName}</h1>
            <p className="py-6">{Description}</p>
            <h2 className=" text-2xl font-semibold">{Counselor}</h2>
            <div className="py-6 grid grid-cols-2 space-x-1 text-xl font-semibold">
                <p>Category:</p>
                <p>{Category}</p>
            </div>
            <div className="grid grid-cols-2 space-x-1 text-xl font-semibold">
                <p>Duration:</p>
                <p>{Duration}</p>
            </div>
            <div className="py-6 grid grid-cols-2 space-x-1 text-xl font-semibold">
                <p>Rating:</p>
                <p>{Rating}</p>
            </div>
            <div className="grid grid-cols-2 space-x-1 text-xl font-semibold">
                <p>Price:</p>
                <p>{Pricing}</p>
            </div>
            <div className="py-6"> 
            <Link to="/" className="btn btn-neutral">Go Back To Home Page</Link>
            </div>
            
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-4" data-aos="flip-up">
      <CommentBox></CommentBox>
      </div>
    </div>
  );
};

export default Details;
