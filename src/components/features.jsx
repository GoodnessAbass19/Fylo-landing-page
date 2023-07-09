import React from "react";
import anywhere from '../images/icon-access-anywhere.svg'
import any_file from '../images/icon-any-file.svg'
import collaboration from '../images/icon-collaboration.svg'
import security from '../images/icon-security.svg'
import productivity from '../images/illustration-stay-productive.png'



const Features = () => {
    const icons = [
        { img: anywhere, head: 'Access your files, Anywhere', text: 'The ability to use a smartphone, tablet, computer to access your account means your files follow you anywhere.' },
        { img: security, head: 'Security you can trust', text: '2-factor authentication and user-controlled encryption are just a couple of the security fwatures we allow to help secure your files.' },
        { img: collaboration, head: 'Real-time collaboration', text: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachment required.' },
        { img: any_file, head: 'Store any type of file', text: 'Whether you are sharing holidays photos or work document.Fylo has you covered allowing for all file types to be securely stored and shared.' },
    ]

    return (
        <section className="items-center md:mt-8 mt-4">
            <div className="flex flex-wrap md:max-w-6xl mx-auto justify-center items-center md:justify-around">
                {
                    icons.map((icon) => (
                        <div className="p-14 items-center text-center text-base md:max-w-lg mx-auto">
                            <div className="py-4">
                                <img src={icon.img} alt="" className="mx-auto inline" />
                            </div>
                            <div className="py-2">
                                <h3 className="text-2xl font-semibold">{icon.head}</h3>
                            </div>
                            <div>
                                <p>{icon.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="items-center flex flex-wrap md:mx-auto mx-4 md:max-w-screen-2xl justify-around mt-20">
                <div>
                    <img src={productivity} alt="" />
                </div>
                <div className="md:max-w-lg md:mx-0 mx-4">
                    <div className="py-4">
                        <h3 className="md:text-5xl text-xl font-sans font-semibold">Stay productive, wherever you are</h3>
                    </div>

                    <div className="text-base">
                        <p className="pb-4">
                            Never let location be an issue when accessing your file. Fylo has you covered for all of your life storage needs.
                        </p>
                        <p>
                            Securely share files and folders with friends, family and colleagues for collaboration. No email attachments required.
                        </p>
                    </div>
                    <div className="flex text-cyan-500 text-center py-4">
                        <a href="/" className="px-1 border-b-2 border-cyan-500">See how fylo works <ion-icon name="arrow-forward-circle-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;