import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto">
      <footer className="footer flex flex-wrap justify-between gap-8 text-base-content py-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <footer className="footer items-center justify-between border-t pt-6 pb-4 px-10 border-base-300 text-base-content">
        <aside className="flex items-center gap-4">
          <div className="bg-purple-600 text-white p-2 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M22.672 15.226l-2.432.811..."></path>
            </svg>
          </div>
          <div>
            <p className="text-xl font-bold text-gray-800">Career Counseling</p>
            <p className="text-sm text-gray-500">
              Providing reliable tech since 1992
            </p>
          </div>
        </aside>

        <nav className="flex gap-4 text-purple-600 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-800 transition"
          >
            <FaInstagram />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
