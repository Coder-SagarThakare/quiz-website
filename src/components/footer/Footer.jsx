import React from 'react'
import logo from '../../images/org_logo.png'
import './Footer.css'

function Footer() {

    const footer = [{
        heading: "GET IN TOUCH",
        subHeading: [
            { route: 'contact', path: '/contact' },
            { route: 'email', path: '/email' },
            { route: 'address', path: '/address' },]
    }, {
        heading: "Terms and Conditions",
        subHeading: [
            { route: 'Privacy policy', path: '/privacy-policy' },
            { route: 'Cookie policy', path: '/cookie-policy' }]
    }, {
        heading: "Social",
        subHeading: [
            { route: 'Facebook', path: '/facebook' },
            { route: 'Instagram', path: '/instagram' },
            { route: 'Twitter', path: '/twitter' }]
    }];

    return (
        <div className='footer bg-primary1 rounded-1 p-4 d-flex flex-column gap-4'>
            <div className='logo-div '>
                <img className='h-75' src={logo} alt='logo' />
            </div>

            <div className='d-flex justify-content-evenly '>
                {footer.map((ele, ind) =>
                    <div className='heading d-flex flex-column' key={ind}>
                        <h6>{ele.heading}</h6>
                        {ele.subHeading.map((items) => <span >{items.icon} {items.route}</span>)}
                    </div>
                )}

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

            <div className='text-center'>
                <span>Copyrights @CodingMitra2024</span>
            </div>
        </div>
    )
}

export default Footer;
