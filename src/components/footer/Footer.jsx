import React from "react";
import logo from "../../images/org_logo.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  const footer = [
    {
      heading: "GET IN TOUCH",
      subHeading: [
        { route: "+91-987654321", path: "/contact", animation: false },
        { route: "dummy@gmail.com", path: "/email", animation: false },
        { route: "At post katraj", path: "/address", animation: false },
      ],
    },
    {
      heading: "Terms and Conditions",
      subHeading: [
        { route: "Privacy policy", path: "/privacy-policy" },
        { route: "Cookie policy", path: "/cookie-policy" },
      ],
    },
    {
      heading: "Social",
      subHeading: [
        { route: "Facebook", path: "/facebook" },
        { route: "Instagram", path: "/instagram" },
        { route: "Twitter", path: "/twitter" },
      ],
    },
    {
      heading: "Careers",
      subHeading: [
        { route: "Overview", path: "/overview" },
        { route: "Life @Coding Company", path: "/life" },
        { route: `FAQ's`, path: "/faq" },
      ],
    },
  ];

  return (
    <div className=" rounded-1 p-4 d-flex flex-column gap-4 glass-effect mt-3">
      <div className="logo-div ">
        <img className="h-75" src={logo} alt="logo" />
      </div>

      <div className="d-flex justify-content-between ">
        {footer.map((ele, ind) => (
          <div className="heading d-flex flex-column" key={ind}>
            <h6>{ele.heading}</h6>
            {ele.subHeading.map((items) => (
              <NavLink
                to={items.path}
                key={ind}
                className={`subheading primary-white p-1 ${items.animation !== false ? "underline" : ""
                  }`}
              >
                <div> {items.route}</div>
              </NavLink>
            ))}
          </div>
        ))}

        {/* <div className='heading d-flex flex-column'>
                    <h6>GET IN TOUCH</h6>
                    <span>contact</span>
                    <span>email</span>
                    <span>address</span>
                </div>

                <div className='heading d-flex flex-column'>
                    <h6>Terms and Conditions</h6>
                    <span>Privacy policy</span>
                    <span>Cookie policy</span>
                </div>

                <div className='heading d-flex flex-column'>
                    <h6>Social</h6>
                    <span>Instagram</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                </div> */}
      </div>

      <div className="text-center">
        <span>© Copyright 2024. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
