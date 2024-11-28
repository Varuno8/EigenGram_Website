import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Startup Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/courses/logo-dark (1).jpg" // Replace with the actual path to your startup logo
              alt="Startup Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h2 className="text-white text-lg font-semibold">Startup</h2>
          </div>
          <p className="mb-4">© copyright Startup 2024. All rights reserved.</p>
        </div>

        {/* Pages Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Socials</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Register Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Register</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Book a Demo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-xs pt-8">
        © 2024 Startup. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
