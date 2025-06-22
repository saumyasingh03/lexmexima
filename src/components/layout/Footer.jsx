import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-3 sm:mb-4">
                    Nari Parcham
                  </h2>
                  <p className="text-gray-300 font-serif text-sm sm:text-base">
                    Advancing grassroots feminist resistance and collective healing
                    for justice, dignity, and liberation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold font-serif mb-3 sm:mb-4 text-sm sm:text-base">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects"
                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold font-serif mb-3 sm:mb-4 text-sm sm:text-base">
                    Contact
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    123 Nature Street
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Green City, Earth
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    info@greeninitiative.org
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 font-serif sm:mb-4 text-sm sm:text-base">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white"
                    >
                      F
                    </a>
                    <a
                      href="#"
                      className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white"
                    >
                      T
                    </a>
                    <a
                      href="#"
                      className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white"
                    >
                      I
                    </a>
                    <a
                      href="#"
                      className="bg-primary-light hover:bg-accent p-2 rounded-full transition-colors text-white"
                    >
                      L
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-primary-light mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300 text-sm sm:text-base">
                <p>
                  © {new Date().getFullYear()} Nari Parcham. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
  )
}

export default Footer
