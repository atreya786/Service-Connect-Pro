"use client";

import Loader from "@components/Loader";
import React, { useEffect, useState } from "react";
import img1 from "../../../public/profile.webp";
import Image from "next/image";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <main className="container mx-auto p-5">
      <div className="p-5 flex justify-center flex-col items-center gap-5">
        <h1 className="text-4xl font-bold text-center">About Us</h1>
        <p className="p-4 bg-gray-100 rounded-lg shadow-md text-lg">
          We are a team of passionate developers who specialize in creating
          visually appealing and interactive web interfaces. Our goal is to
          provide innovative solutions that enhance user engagement and drive
          business growth. With a strong foundation in HTML, CSS, and
          JavaScript, we transform design concepts into seamless and responsive
          web applications. We are committed to staying updated with the latest
          industry trends and strive to deliver high-quality products that meet
          the unique needs of our clients.
        </p>
        <p className="p-4 bg-gray-100 rounded-lg shadow-md text-lg">
          We believe that the key to success lies in building strong
          relationships with our clients and understanding their vision. By
          collaborating closely with our clients, we are able to create
          solutions that are tailored to their specific requirements. Our
          dedication to excellence and commitment to delivering exceptional
          results have earned us a reputation for being a trusted partner in the
          industry. We take pride in our work and are passionate about helping
          our clients achieve their goals.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-center">Team Members</h1>
      <div className="flex flex-col md:flex-row justify-center p-5">
        <div className="flex flex-col items-center justify-center md:mb-0">
          <Image
            className="rounded-full object-cover"
            src={img1}
            alt="Atreya Chandan"
            width={600}
            height={600}
          />
          <h4 className="text-xl text-center font-bold p-1">Atreya Chandan</h4>
          <h1 className="text-lg text-center text-gray-600">Lead Developer</h1>
        </div>
        <div className="md:ml-8 flex items-center">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-gray-800">
              Highly skilled and dedicated full stack developer with a passion
              for creating visually appealing and interactive user experiences.
              Equipped with a strong foundation in HTML, CSS, and JavaScript, I
              specialize in transforming design concepts into seamless and
              responsive web interfaces. With a keen eye for detail and a
              commitment to staying updated with the latest industry trends, I
              strive to deliver innovative solutions that enhance user
              engagement and drive business growth.
            </p>
            <ul className="flex justify-center md:justify-start mt-4">
              <li className="mr-4">
                <a href="mailto:sovonsutarsuitar123@gmail.com">
                  <i className="fa fa-envelope fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.facebook.com/subarna2002">
                  <i className="fa fa-facebook fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/itz_sutar/?hl=en">
                  <i className="fa fa-instagram fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/in/subarna-keshari-sutar-/">
                  <i className="fa fa-linkedin fa-fw" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-5">
        <div className="md:mr-8 flex items-center pb-3">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-gray-800">
              Highly skilled and dedicated full stack developer with a passion
              for creating visually appealing and interactive user experiences.
              Equipped with a strong foundation in HTML, CSS, and JavaScript, I
              specialize in transforming design concepts into seamless and
              responsive web interfaces. With a keen eye for detail and a
              commitment to staying updated with the latest industry trends, I
              strive to deliver innovative solutions that enhance user
              engagement and drive business growth.
            </p>

            <ul className="flex justify-center md:justify-start mt-4">
              <li className="mr-4">
                <a href="mailto:sovonsutarsuitar123@gmail.com">
                  <i className="fa fa-envelope fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.facebook.com/subarna2002">
                  <i className="fa fa-facebook fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/itz_sutar/?hl=en">
                  <i className="fa fa-instagram fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/in/subarna-keshari-sutar-/">
                  <i className="fa fa-linkedin fa-fw" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:mb-0">
          <Image
            className="rounded-full object-cover"
            src={img1}
            alt="Atreya Chandan"
            width={600}
            height={600}
          />
          <h4 className="text-xl text-center font-bold pt-2">
            Rajat Kishore Acharya
          </h4>
          <h1 className="text-lg text-gray-600">Developer</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center p-5">
        <div className="flex flex-col items-center justify-center md:mb-0">
          <Image
            className="rounded-full object-cover"
            src={img1}
            alt="Atreya Chandan"
            width={600}
            height={600}
          />
          <h4 className="text-xl text-center font-bold p-1">
            Partha Sarathi Das
          </h4>
          <h1 className="text-lg text-gray-600">Developer</h1>
        </div>
        <div className="md:ml-8 flex items-center">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-gray-800">
              Highly skilled and dedicated full stack developer with a passion
              for creating visually appealing and interactive user experiences.
              Equipped with a strong foundation in HTML, CSS, and JavaScript, I
              specialize in transforming design concepts into seamless and
              responsive web interfaces. With a keen eye for detail and a
              commitment to staying updated with the latest industry trends, I
              strive to deliver innovative solutions that enhance user
              engagement and drive business growth.
            </p>
            <ul className="flex justify-center md:justify-start mt-4">
              <li className="mr-4">
                <a href="mailto:sovonsutarsuitar123@gmail.com">
                  <i className="fa fa-envelope fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.facebook.com/subarna2002">
                  <i className="fa fa-facebook fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.instagram.com/itz_sutar/?hl=en">
                  <i className="fa fa-instagram fa-fw" />
                </a>
              </li>
              <li className="mr-4">
                <a href="https://www.linkedin.com/in/subarna-keshari-sutar-/">
                  <i className="fa fa-linkedin fa-fw" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
