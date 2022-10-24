import React from "react";
import LOGO from "./Assets/logo.png";
import student from "./Assets/student.png";
import Image from "next/image";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import styles from "../../styles/banner.module.css";
import BannerStyle from "./BannerStyle";

const Banner = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <BannerStyle>
      <div>
        <header className={styles.navv}>
          <Image
            style={{ background: "white", borderRadius: "90%" }}
            src={LOGO}
            alt="logo"
          />
          <nav ref={navRef}>
            {" "}
            <a href="/#">Home</a>
            <a href="/#">Careers</a>
            <a href="/#">Blog</a>
            <a href="/#">About us</a>
            <div>
              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "2px solid white",
                  borderRadius: "18px",
                  width: "170px",
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  padding: "4px 8px",
                }}
              >
                Languages
              </button>
              <button
                style={{
                  background: "#F48C06",
                  color: "white",
                  border: "2px solid #F48C06",
                  borderRadius: "18px",
                  width: "170px",
                  fontFamily: "Poppins",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  padding: "4px 8px",
                }}
              >
                Download
              </button>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
        <div className={styles.main}>
          <div className={styles.maincontainer}>
            <div className={styles.textarea}>
              <span
                style={{
                  color: "#F48C06",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "40px",
                }}
              >
                Studying{" "}
              </span>
              <span
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "40px",
                }}
              >
                Online is now much easier
              </span>
              <br></br>
              <br></br>

              <span
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "20px",
                  fontFamily: "Nunito Sans",
                }}
              >
                {" "}
                We aim to make virtual learning and communication easier and
                more accessible to students across the world and from different
                educational backgrounds.
              </span>
              <br></br>
              <br></br>
              <div className={styles["button-container"]}>
                <div className={`${styles.button} ${styles.Resume}`}>
                  Join for free
                </div>
                <div className={styles.playbutton}>
                  <BsPlayFill
                    style={{ fontSize: "40px", color: "#CACAF1" }}
                  ></BsPlayFill>
                </div>
                <div className={`${styles.button} ${styles.Hire}`}>
                  Watch how it works
                </div>
              </div>
            </div>

            <div className={styles.imagearea}>
              <Image
                width="425px"
                height="550px"
                src={student}
                alt="A happy student"
                className={styles.imagearea1}
              />

              <div className={styles.floatingcards}>
                {" "}
                <div
                  className={styles.item1}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  <div id={styles.item1}>
                    <BiBarChart></BiBarChart>
                  </div>
                </div>
                <div
                  className={styles.item2}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div
                    id={styles.item2}
                    style={{ color: "black", fontFamily: "Poppins" }}
                  >
                    {" "}
                    <BsCalendar2DateFill
                      style={{
                        fontSize: "35px",
                        color: "white",
                        background: "#23BDEE",
                        borderRadius: "8px",
                      }}
                    ></BsCalendar2DateFill>
                    <span>
                      <span
                        style={{
                          fontWeight: "700",
                          fontSize: "16px",
                          color: "#595959",
                        }}
                      >
                        250k
                      </span>
                      <br></br>{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "12px",
                          color: "#595959",
                        }}
                      >
                        Assisted student
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className={styles.item3}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div id={styles.item3}>
                    <div>
                      {" "}
                      <IoMdMail
                        style={{
                          fontSize: "40px",
                          color: "white",
                          background: "#F88C3D",
                          borderRadius: "8px",
                        }}
                      ></IoMdMail>
                    </div>
                    <div>
                      Congratulations,<br></br>Your admission completed
                    </div>
                  </div>
                </div>
                <div
                  className={styles.item4}
                  style={{ backgroundColor: "transparent" }}
                >
                  <div id={styles.item4}>
                    <div>
                      {" "}
                      <CgProfile style={{ fontSize: "40px" }}></CgProfile>
                    </div>
                    <div>
                      {" "}
                      User Experience Class<br></br>Today at 12.00 PM
                      <br></br>
                      <div
                        variant="outline-light"
                        style={{
                          background: "#F48C06",
                          color: "black",
                          border: "2px solid  #F48C06",
                          borderRadius: "50px",
                          paddingLeft: "3.3em",
                        }}
                      >
                        Login{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyle>
  );
};

export default Banner;
