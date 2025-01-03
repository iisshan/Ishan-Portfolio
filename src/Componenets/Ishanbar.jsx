import React from "react";

const Ishanbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            className="mx-2 rounded-lg"
            width={50}
            height={33}
            src="https://www.shutterstock.com/image-vector/initial-letter-ik-logo-design-260nw-2355392893.jpg"
            alt="mylogo"
          />
        </a>
      </div>
      <div className="m-8  flex items-center justify-center gap-4 text-xl text-white">
        <a
          href="https://www.linkedin.com/in/ishan-kashyap-5b83a120a/
            "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className=" hover:text-blue-500 ml-1"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/iisshan
            "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className=" hover:text-green-500 ml-1"
        >
          Github
        </a>
        <a
          href="https://x.com/kashyap_is61998
            "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className=" hover:text-orange-500 ml-1"
        >
          Twitter
        </a>
      </div>
    </nav>
  );
};

export default Ishanbar;
