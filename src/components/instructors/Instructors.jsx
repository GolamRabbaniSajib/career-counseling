import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Instructors = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="py-6 space-y-2"
      >
        <p className="text-center text-xl text-green-300 font-medium">
          Our team
        </p>
        <h1 className="text-4xl font-semibold text-center">
          Our <span className="text-green-300">instructors</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="card card-compact border p-4 bg-[#FFF9EB]">
            <figure>
              <img src="https://i.ibb.co.com/x6gpLtF/1.jpg" alt="Peter Webb" />
            </figure>
            <div className="card-body bg-white rounded-3xl mt-4">
              <div className="flex justify-center items-center">
                <h2 className="card-title text-center">Peter Webb</h2>
              </div>
              <hr />
              <p className="text-center">instructors</p>
              <hr />
              <div className="flex items-center justify-center space-x-2">
                <div className="p-2 rounded-full bg-green-200">
                  <FaFacebookF />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaTwitter />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="card card-compact border p-4 bg-[#FFF9EB]">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Victoria Flores"
              />
            </figure>
            <div className="card-body bg-white rounded-3xl mt-4">
              <div className="flex justify-center items-center">
                <h2 className="card-title text-center">Victoria Flores</h2>
              </div>
              <hr />
              <p className="text-center">instructors</p>
              <hr />
              <div className="flex items-center justify-center space-x-2">
                <div className="p-2 rounded-full bg-green-200">
                  <FaFacebookF />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaTwitter />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        >
          <div className="card card-compact border p-4 bg-[#FFF9EB]">
            <figure>
              <img
                src="https://i.ibb.co.com/Yb0gDQp/3.jpg"
                alt="Debra Stevens"
              />
            </figure>
            <div className="card-body bg-white rounded-3xl mt-4">
              <div className="flex justify-center items-center">
                <h2 className="card-title text-center">Debra Stevens</h2>
              </div>
              <hr />
              <p className="text-center">instructors</p>
              <hr />
              <div className="flex items-center justify-center space-x-2">
                <div className="p-2 rounded-full bg-green-200">
                  <FaFacebookF />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaTwitter />
                </div>
                <div className="p-2 rounded-full bg-green-200">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
