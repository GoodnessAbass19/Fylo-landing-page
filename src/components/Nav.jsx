import React from "react";
import logo from '../images/logo.svg'

const Nav = () => {
const link = [
    {name: 'Feature'},
    {name: 'Team'},
    {name: 'Sign-in'},
]


    return (
        <nav className=" text-white md:mx-6">
            <div className="pt-6 flex md:justify-between md:mx-6 mx-4 justify-between md:items-center">
                <div>
                    <img src={logo} alt="" className="md:w-full  md:h-full h-5"/>
                </div>
                <ul className="flex flex-row md:gap-10 gap-2 md:text-xl text-base justify-between items-center">
                   {
                    link.map((links) =>(
                        <li className="text-gray-500 hover:text-white px-1 text-center md:text-xl text-base">
                            <a href="/">{links.name}</a>
                        </li>
                    )) 
                   }
                </ul>
            </div>
        </nav>
    );
}

export default Nav;