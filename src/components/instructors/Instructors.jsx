import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const instructors = [
  {
    name: "Peter Webb",
    image: "https://i.ibb.co.com/x6gpLtF/1.jpg",
  },
  {
    name: "Victoria Flores",
    image:
      "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Debra Stevens",
    image: "https://i.ibb.co.com/Yb0gDQp/3.jpg",
  },
];

const Instructors = () => {
  return (
    <section className="w-11/12 mx-auto py-12">
      {/* Section Header */}
      <div
        className="text-center space-y-2 mb-10"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <p className="text-lg text-green-400 font-medium">Our Team</p>
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Our <span className="text-green-400">Instructors</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor, index) => (
          <div
            key={instructor.name}
            data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
            data-aos-offset="200"
            data-aos-duration="1200"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-[#FFFDF6] text-center space-y-4 rounded-b-xl">
              <h3 className="text-xl font-semibold text-gray-800">{instructor.name}</h3>
              <p className="text-sm text-gray-500">Instructor</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-300 hover:text-black transition"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
