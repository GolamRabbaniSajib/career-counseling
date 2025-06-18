const Coaching = () => {
  const items = [
    {
      id: 1,
      title: "Explore",
      description:
        "Discover new horizons and ignite your passion for adventure. Whether it's breathtaking landscapes, hidden gems, or vibrant cultures, the world is waiting for you.",
    },
    {
      id: 2,
      title: "Mentorship",
      description:
        "Gain valuable insights, guidance, and support from industry leaders who have walked the path you aspire to take. Transform your career through tailored mentorship.",
    },
    {
      id: 3,
      title: "Motivate",
      description:
        "Ready to elevate your performance and achieve your dreams? Transform your mindset, overcome obstacles, and unleash your inner drive.",
    },
    {
      id: 4,
      title: "Support",
      description:
        "Every journey deserves a reliable partner. Our support team is here 24/7 to ensure you have the guidance and assistance you need to thrive.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Life Coaching Procedure</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
          Our structured life coaching procedure is designed to help you identify goals, overcome
          obstacles, and cultivate a fulfilling path forward.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            data-aos={index < 2 ? "fade-down" : "fade-up"}
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="bg-gray-800 rounded-xl p-6 space-y-4 hover:shadow-lg transition"
          >
            {/* Step Number */}
            <div className="flex items-center justify-start">
              <span className="text-sm font-semibold bg-green-300 text-black rounded-full px-3 py-1">
                {item.id}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-purple-300">{item.title}</h3>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coaching;
