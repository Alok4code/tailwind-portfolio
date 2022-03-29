import React from "react";
import behanceIcon from "./assets/images/behance-icon.svg";
import mediumIcon from "./assets/images/medium-icon.svg";
import twitterIcon from "./assets/images/twitter-icon.svg";
import heroIamge from "./assets/images/hero-image.png";

function App() {
  return (
    <>
      <nav className="flex justify-between py-4 items-center max-w-7xl mx-auto">
        <h1 className="text-dark-blue font-semibold text-2xl">John Doe</h1>
        <ul className="flex gap-x-12 text-dark-blue font-normal">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </ul>
        <ul className="flex gap-x-12">
          <li>
            <img src={behanceIcon} className="cursor-pointer" alt=" " />
          </li>
          <li>
            <img src={mediumIcon} className="cursor-pointer" alt=" " />
          </li>
          <li>
            <img src={twitterIcon} className="cursor-pointer" alt=" " />
          </li>
        </ul>
      </nav>
      <section className="flex justify-between py-20 items-center max-w-7xl mx-auto">
        <div className="text-dark-blue font-normal">
          <p className=" text-2xl">Hello, I’m John,</p>
          <p className="font-extrabold text-8xl pb-6">Product Designer</p>
          <p className=" text-2xl">based in Netherland.</p>
          <button className="text-dark-brown px-4 py-2 mt-4 rounded-md border-solid border border-dark-brown bg-yellow-bg">
            Resume
          </button>
        </div>
        <div>
          <img src={heroIamge} className="" alt=" " />
        </div>
      </section>
    </>
  );
}

export default App;
