import React from "react";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen min-w-screen mx-6 mt-[6rem] mb-[2rem]">
      {/* heading */}
      <header className=" text-center">
        <h1 className=" dark:text-white font-[700] leading-[64px] lg:text-[38px] md:text-[32px] sm:text-[26px] text-[#2F327D] text-[22px]">
          All-In-One <span className="text-[#F48C06]">Cloud Software.</span>
        </h1>
        <p className=" text-gray-400 font-light mx-auto w-[837px] text-xl">
          PeersApp is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </header>
      {/* cards */}
      <div className="grid mt-[3rem] lg:grid-cols-3 justify-items-center gap-2">
        <Card
          heading={"Online Billing, Invoicing, & Contracts"}
          content={`Simple and secure control of your organization's financial and
        legal transactions. Send customized invoices and contracts`}
          Icon={FaUsers}
          color={`bg-[#F48C06]`}
        />
        <Card
          heading={"Online Billing, Invoicing, & Contracts"}
          content={`Simple and secure control of your organization's financial and
        legal transactions. Send customized invoices and contracts`}
          Icon={FaUsers}
          color={`bg-[#5B72EE]`}
        />
        <Card
          heading={"Online Billing, Invoicing, & Contracts"}
          content={`Simple and secure control of your organization's financial and
        legal transactions. Send customized invoices and contracts`}
          Icon={FaUsers}
          color={`bg-[#29B9E7]`}
        />
      </div>
      {/* about */}
      <div className=" text-center mt-[4rem] mb-[5rem]">
        <h1 className=" dark:text-whitetext-[#2F327D] font-[600] leading-[79.2px] text-[44px] ">
          <span className=" text-[#020279]">What is</span> <span className=" text-[#FA771B]">PeersApp?</span>
        </h1>
        <p className=" dark:text-white mx-auto w-[837px] text-gray-400 font-light text-xl text-center px-8">
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
    </section>
  );
};

export default About;
