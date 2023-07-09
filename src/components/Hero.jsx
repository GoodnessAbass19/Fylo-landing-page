import React from "react";
import hero from '../images/illustration-intro.png'

const Hero = () => {
    return (
        <section className="items-center md:mt-20 mt-10">
            <div className="mx-auto max-w-2xl text-center">
                <div>
                    <img src={hero} alt="" />
                </div>
                <div className="p-6 text-center">
                    <h2 className="text-4xl font-semibold font-sans">
                        All your files in one secure location, accessible anywhere.
                    </h2>
                    <div className="p-6">
                        <p className="text-xl">
                            Fylo stores all your important file in one secure location. Access them wherever you need, share and collaborate with friends family,and co-workers.
                        </p>
                        <div className="p-4">
                            <button className="bg-cyan-500 hover:bg-cyan-400 rounded-full py-2 px-16 text-xl">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;