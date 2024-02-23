import React from "react";
import logo from "../../images/org_logo.png";
import "./Footer.css";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin,  MdCookie } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSquareXTwitter,  FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { ImWink2 } from "react-icons/im";
import { CiViewTimeline } from "react-icons/ci";
import { FaQuestionCircle } from "react-icons/fa";
import { memo } from "react";


function Footer() {
  console.log('footer');
  // const footer = [
  //   {
  //     heading: "GET IN TOUCH",
  //     subHeading: [
  //       { route: "+91-987654321", path: "/contact", animation: false },
  //       { route: "dummy@gmail.com", path: "/email", animation: false },
  //       { route: "At post katraj", path: "/address", animation: false },
  //     ],
  //   },
  //   {
  //     heading: "Terms and Conditions",
  //     subHeading: [
  //       { route: "Privacy policy", path: "/privacy-policy" },
  //       { route: "Cookie policy", path: "/cookie-policy" },
  //     ],
  //   },
  //   {
  //     heading: "Social",
  //     subHeading: [
  //       { route: "Facebook", path: "/facebook" },
  //       { route: "Instagram", path: "/instagram" },
  //       { route: "Twitter", path: "/twitter" },
  //     ],
  //   },
  //   {
  //     heading: "Careers",
  //     subHeading: [
  //       { route: "Overview", path: "/overview" },
  //       { route: "Life @Coding Company", path: "/life" },
  //       { route: `FAQ's`, path: "/faq" },
  //     ],
  //   },
  // ];

  // {/* {footer.map((ele, ind) => (
  //     <div className="heading d-flex flex-column" key={ind}>
  //       <h6 className="text-decoration-underline">{ele.heading}</h6>
  //       {ele.subHeading.map((items,index) => (
  //         <NavLink
  //           to={items.path}
  //           key={`${ind}${index}`}
  //           className={`subheading primary-white p-0 p-sm-1 ${items.animation !== false ? "underline" : ""
  //             }`}
  //         >
  //           <div> {items.route}</div>
  //         </NavLink>
  //       ))}
  //     </div>
  //   ))} */}

  return (
    <div className=" p-4 d-flex flex-column gap-3 glass-effect mt-3 user-select-none">

      <div className="logo-div ">
        <img className="h-75" src={logo} alt="logo" />
      </div>

      <div className="d-flex flex-column gap-4 flex-lg-row justify-content-lg-between ">
        <div className=" d-flex flex-column gap-3 flex-sm-row justify-content-sm-around width-50 ">

          <div className='heading d-flex flex-column'>
            <h6>GET IN TOUCH</h6>
            <span className="cursor mb-1"> <BiSolidPhoneCall size={20} /> +91 9876543210</span>
            <span className="cursor mb-1 text-truncate"><IoIosMail size={20} /> info@IndianCoders.com</span>
            <span className="cursor mb-1"><MdLocationPin size={20} /> Address</span>
          </div>

          <div className='heading d-flex flex-column'>
            <h6>Terms and Conditions</h6>
            <span className="underline"> <SiGnuprivacyguard size={20} /> Privacy policy</span>
            <span className="underline"><MdCookie size={20} /> Cookie policy</span>
          </div>
        </div>

        <div className=" d-flex flex-column gap-3 flex-sm-row justify-content-sm-around width-50 ">

          <div className='heading d-flex flex-column '>
            <h6>Social</h6>
            <span className="underline"><AiFillInstagram size={20} /> Instagram</span>
            <span className="underline"><FaSquareFacebook size={20} /> Facebook</span>
            <span className="underline"><FaSquareXTwitter size={20} /> Twitter</span>
          </div>

          <div className='heading d-flex flex-column '>
            <h6>Careers</h6>
            <span className="underline"><CiViewTimeline /> Overview</span>
            <span className="underline"><ImWink2 /> Life @Coding Company</span>
            <span className="underline"><FaQuestionCircle /> FAQ's</span>
          </div>
        </div>
      </div>


      <div className="text-center">
        <span>© Copyright 2024. All rights reserved.</span>
      </div>
    </div>
  );
}

export default memo(Footer);
