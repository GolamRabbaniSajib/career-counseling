import { Helmet } from "react-helmet-async";

const Review = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen my-4 py-4">
        <Helmet>
            <title>Career | Reviews</title>
        </Helmet>
      <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="py-4 space-y-2">
        <p className="text-xl font-bold text-green-300 text-center">our</p>
        <h1 className="text-4xl font-semibold text-center">User <span className="text-green-300">Reviews</span></h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Frances Wagner
              </h2>
              <p className="text-sm text-gray-500">Member</p>
            </div>

            <div className="text-blue-500 text-4xl mt-4">
              <span>“</span>
            </div>

            <p className="text-gray-600 mt-2 px-4 text-center">
              The career website offers a user-friendly interface with
              comprehensive resources for job seekers. The search functionality
              is intuitive, facilitating easy access to relevant job listings
              and career advice. Overall, it is a valuable tool for anyone
              looking to advance their professional journey
            </p>
          </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Becky Lance
              </h2>
              <p className="text-sm text-gray-500">Member</p>
            </div>

            <div className="text-blue-500 text-4xl mt-4">
              <span>“</span>
            </div>

            <p className="text-gray-600 mt-2 px-4 text-center">
              Fantastic platform! The user interface is clean and
              straightforward, making it easy to search and apply for jobs. I
              particularly appreciate the personalized recommendations, which
              align perfectly with my skills and career goals. The additional
              resources, like webinars and skill-building courses, are a nice
              bonus. It's clear the team behind this website understands what
              job seekers need. I’ve already recommended it to friends and
              colleagues!
            </p>
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 flex flex-col items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />

            <div className="text-center mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Harry</h2>
              <p className="text-sm text-gray-500">Member</p>
            </div>

            <div className="text-blue-500 text-4xl mt-4">
              <span>“</span>
            </div>

            <p className="text-gray-600 mt-2 px-4 text-center">
              This career website has exceeded my expectations! It’s not just
              about job listings—the career advice articles and tips for
              improving your resume have been invaluable. The advanced search
              filters save so much time, and I’ve found roles I never would’ve
              considered before. The site also offers salary insights and
              company reviews, which gave me confidence during interviews.
              Thanks to this platform, I landed my dream job in just two months!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
