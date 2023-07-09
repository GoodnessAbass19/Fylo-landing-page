import React from "react";
import logo from '../images/logo.svg'
import location from '../images/icon-location.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'



const Footer = () => {
    const links = [
        { link: 'About us' },
        { link: 'Jobs' },
        { link: 'Press' },
        { link: 'Blog' },
    ]

    const logos = [
        {icon: 'logo-facebook'},
        {icon: 'logo-twitter'},
        {icon: 'logo-instagram'},
    ]

    return (
        <section className="bg-black">
            <div className="pt-20 md:mx-20 mx-4 items-center md:max-w-screen-2xl leading-8">
                <div>
                    <img src={logo} alt="" className="md:h-full h-9 " />
                </div>

                <div className="flex md:flex-row flex-wrap flex-col py-10 justify-between  mx-auto">
                    <div className="flex md:max-w-sm">
                        <img src={location} alt="" className="h-6" />
                        <div className="px-2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi facilis laudantium, libero odio harum? Illo libero consequuntur eius odio?
                            </p>
                        </div>
                    </div>
                    <div className=" items-center text-center md:my-0 my-4 leading-8">
                        <div className="flex items-center text-center">
                            <img src={phone} alt="" className="h-6"/>
                            <p className="px-2">+1-543-123-4567</p>
                        </div>
                        <div className="flex items-center text-center">
                            <img src={email} alt="" className="h-6"/>
                            <p className="px-2">example@fylo.com</p>
                        </div>
                    </div>
                    <div className="md:my-0 my-4">
                        <ul>
                            {
                                links.map((li) => (
                                    <li className="text-gray-400  hover:text-white">
                                        <a href="/">{li.link}</a>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                    <div className="md:my-0 my-4">
                        <ul>
                            <li className="text-gray-400  hover:text-white">
                                <a href="/">Contact</a>
                            </li>
                            <li className="text-gray-400  hover:text-white">
                                <a href="/">Terms</a>
                            </li>
                            <li className="text-gray-400  hover:text-white">
                                <a href="/">Privacy</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex md:mx-0 mx-auto">
                        {
                            logos.map((icons) =>(
                                <div className="p-3 hover:text-blue-400 text-lg">
                                <ion-icon name={icons.icon}></ion-icon>
                            </div>
                            ))
                        }
                      
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Footer;