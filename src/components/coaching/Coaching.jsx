

const Coaching = () => {
    return (
        <div className="*:text-white">
            <div className="py-10 space-y-4 w-11/12 mx-auto">
                <h1 className="text-3xl font-bold text-center">Life Coaching Procedure</h1>
                <p className="text-center font-medium text-gray-400">Our structured life coaching procedure is designed to help you identify goals, overcome obstacles, and cultivate a fulfilling path forward. With personalized guidance and proven strategies, you’ll gain clarity and confidence to achieve your dreams.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-2 pb-8 w-11/12 mx-auto">
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex"><p className="py-1 px-3 rounded-full bg-green-300 text-black ">1</p></div>
                        <h1 className="text-2xl font-semibold text-purple-300">Explore</h1>
                    </div>
                    <p className="text-slate-300">Discover new horizons and ignite your passion for adventure. Whether it's breathtaking landscapes, hidden gems, or vibrant cultures, the world is waiting for you. Join us in exploring the beauty that surrounds us and create unforgettable memories.</p>
                </div>
                <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex"><p className="py-1 px-3 rounded-full bg-green-300 text-black ">2</p></div>
                        <h1 className="text-2xl font-semibold text-purple-300">Mentorship</h1>
                    </div>
                    <p className="text-slate-300">Gain valuable insights, guidance, and support from industry leaders who have walked the path you aspire to take. Transform your career and elevate your skills through personalized mentorship tailored to your goals.</p>
                </div>
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex"><p className="py-1 px-3 rounded-full bg-green-300 text-black ">3</p></div>
                        <h1 className="text-2xl font-semibold text-purple-300">Motivate</h1>
                    </div>
                    <p className="text-slate-300">Are you ready to elevate your performance and achieve your dreams? Discover the power of motivation! Transform your mindset, overcome obstacles, and unleash your inner drive.</p>
                </div>
                <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" className="space-y-4">
                    <div className="space-y-4">
                        <div className="flex"><p className="py-1 px-3 rounded-full bg-green-300 text-black ">4</p></div>
                        <h1 className="text-2xl font-semibold text-purple-300">Support</h1>
                    </div>
                    <p className="text-slate-300">At this site, we believe that every journey deserves a reliable partner. Our dedicated support team is here 24/7 to ensure you have the guidance and assistance you need to thrive.</p>
                </div>
            </div>
        </div>
    );
};

export default Coaching;