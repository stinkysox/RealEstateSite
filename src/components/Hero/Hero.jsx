import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>

            <motion.h1
              initial={{ x: "10rem", opacity: "0" }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
            >
              Discover <br /> Most Sutiable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Find a varitety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residance for you.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span className="plus">+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <motion.div
            className="image-container"
            initial={{ y: "10rem", opacity: "0" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
