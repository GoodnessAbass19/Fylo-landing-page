import React from "react";
import quote from '../images/bg-quotes.png'
import profile_1 from '../images/profile-1.jpg'
import profile_2 from '../images/profile-2.jpg'
import profile_3 from '../images/profile-3.jpg'


const Profile = () => {
    const profiles = [
        { img: profile_1, name: 'Satish Patel', position: 'Founder & CEO, Huddle', head: 'Fylo has improved our productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.' },
        { img: profile_2, name: 'Bruce McKenzie', position: 'Founder & CEO, Huddle', head: 'Fylo has improved our productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.' },
        { img: profile_3, name: 'Ivy Boyd', position: 'Founder & CEO, Huddle', head: 'Fylo has improved our productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine.' },
    ]


    return (
        <section className="mt-20 ">
            <div className="md:ml-20 m-6">
                <img src={quote} alt="" />
            </div>
            <div className="flex flex-wrap justify-around items-center mx-auto md:mx-24 max-h-screen">

                {
                    profiles.map((about) => (
                        <div className="p-6 bg-gray-800 md:max-w-md m-4">
                            <div className="py-4 text-base text-center">
                                <p>{about.head}</p>
                            </div>
                            <div className="flex pt-5">
                               <div className="pr-3">
                               <img src={about.img} alt="" className="rounded-full md:w-14 w-12" />
                               </div>
                                <div className="">
                                    <h2 className="text-xl font-bold">{about.name}</h2>
                                    <p>{about.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </section>
    );
}

export default Profile;